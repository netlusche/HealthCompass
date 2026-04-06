import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dictionariesDir = path.resolve(__dirname, '../src/i18n/dictionaries');
const indexPath = path.resolve(__dirname, '../index.html');

const locales = ['en', 'de', 'tr', 'ru', 'pl', 'uk', 'ro', 'ar'];
let metaMap = {};

locales.forEach(lang => {
  const filePath = path.join(dictionariesDir, `${lang}.ts`);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    // Regex optimized to match keys and content within quotes, handling internal quotes
    // We match title: "..." or title: '...' or title: `...`
    const titleMatch = content.match(/title:\s*(["']|`)(.*?)\1/);
    const descMatch = content.match(/description:\s*(["']|`)(.*?)\1/);
    
    if (titleMatch && descMatch) {
      metaMap[lang] = {
        title: titleMatch[2].trim(),
        desc: descMatch[2].trim()
      };
    }
  }
});

const phpMapStr = Object.entries(metaMap)
  .map(([lang, data]) => {
    // Escape single quotes for PHP compatibility
    const safeTitle = data.title.replace(/'/g, "\\'");
    const safeDesc = data.desc.replace(/'/g, "\\'");
    return `    '${lang}' => [
        'title' => '${safeTitle}',
        'desc'  => '${safeDesc}'
    ]`;
  })
  .join(',\n');

const phpBlock = `<?php
/**
 * HealthCompass - Server-side Meta Tag Injection
 * Automatically synced from i18n dictionaries.
 */
$lang = isset($_GET['lang']) ? $_GET['lang'] : 'en';

$meta_map = [
${phpMapStr}
];

$m = isset($meta_map[$lang]) ? $meta_map[$lang] : $meta_map['en'];
$title = htmlspecialchars($m['title']);
$description = htmlspecialchars($m['desc']);
?>`;

if (!fs.existsSync(indexPath)) {
  console.error("Error: index.html not found.");
  process.exit(1);
}

let indexContent = fs.readFileSync(indexPath, 'utf8');

// Inject or Replace PHP Block
const startMarker = '<?php';
const endMarker = '?>';
const existingStart = indexContent.indexOf(startMarker);
const existingEnd = indexContent.indexOf(endMarker);

if (existingStart !== -1 && existingEnd !== -1 && existingStart < indexContent.indexOf('<!DOCTYPE html>')) {
  // Update existing block at top
  indexContent = phpBlock + indexContent.substring(existingEnd + endMarker.length);
} else {
  // Insert at top of file
  indexContent = phpBlock + '\n' + indexContent;
}

// Replace Static Markers with PHP Echoes
// Ensure the HTML tag uses PHP for lang
indexContent = indexContent.replace(/<html lang="[a-z]{2}">/, '<html lang="<?php echo htmlspecialchars($lang); ?>">');

// Replace Title
indexContent = indexContent.replace(/<title>.*?<\/title>/, '<title><?php echo $title; ?></title>');

// Replace Meta tags
// Description
indexContent = indexContent.replace(/<meta name="description" content=".*?" \/>/, '<meta name="description" content="<?php echo $description; ?>" />');

// Social tags (OpenGraph and Twitter)
// We replace the content portion of these tags with the PHP variables
indexContent = indexContent.replace(/property="og:title" content=".*?"/g, 'property="og:title" content="<?php echo $title; ?>"');
indexContent = indexContent.replace(/property="og:description" content=".*?"/g, 'property="og:description" content="<?php echo $description; ?>"');
indexContent = indexContent.replace(/name="twitter:title" content=".*?"/g, 'name="twitter:title" content="<?php echo $title; ?>"');
indexContent = indexContent.replace(/name="twitter:description" content=".*?"/g, 'name="twitter:description" content="<?php echo $description; ?>"');

fs.writeFileSync(indexPath, indexContent);
console.log('Successfully synced PHP meta tags to index.html');
