import React, { useState } from 'react';
import { useI18n } from '@/components/providers/I18nProvider';
import { 
  MessageCircle, 
  Send, 
  Check, 
  Copy 
} from 'lucide-react';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const RedditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 11.5c0-1.65-1.35-3-3-3-.4 0-.78.08-1.12.23C18.25 7.42 15.62 6.5 12.67 6.43l.53-2.48 1.74.37c.04.83.72 1.5 1.56 1.5a1.5 1.5 0 0 0 0-3c-.84 0-1.52.67-1.56 1.5l-2-.43a.49.49 0 0 0-.58.37l-.59 2.76c-3.05.04-5.8 1-7.3 2.3-.34-.15-.72-.23-1.12-.23-1.65 0-3 1.35-3 3 0 1.2.7 2.22 1.73 2.72-.03.26-.06.53-.06.8 0 3.86 4.3 7 9.6 7s9.6-3.14 9.6-7c0-.28-.03-.55-.07-.82 1.05-.48 1.73-1.52 1.73-2.72zm-16.5 2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm9 5.5c-1.32 1.6-4.13 1.6-5 1.6s-3.68 0-5-1.6a.48.48 0 1 1 .74-.6c.9 1.1 2.94 1.28 4.26 1.28 1.32 0 3.36-.18 4.26-1.28a.48.48 0 0 1 .74.6zm.5-4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
);

export function ShareBar() {
  const { locale, t } = useI18n();
  const [copied, setCopied] = useState(false);

  // Generate the share URL with the ?lang parameter for server-side processing
  const getShareUrl = () => {
    const origin = window.location.origin;
    const path = window.location.pathname === '/' ? '' : window.location.pathname;
    const hash = window.location.hash;
    // We explicitly append ?lang= to ensure localized meta tags are served
    return `${origin}${path}?lang=${locale}${hash}`;
  };

  const shareUrl = getShareUrl();
  const shareText = encodeURIComponent(t.meta.title);
  const encodedUrl = encodeURIComponent(shareUrl);

  const platforms = [
    {
      name: t.share.whatsapp,
      icon: <MessageCircle className="w-5 h-5" />,
      url: `https://wa.me/?text=${shareText}%20${encodedUrl}`,
      color: 'bg-[#25D366]',
    },
    {
      name: t.share.facebook,
      icon: <FacebookIcon />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'bg-[#1877F2]',
    },
    {
      name: t.share.telegram,
      icon: <Send className="w-5 h-5" />,
      url: `https://t.me/share/url?url=${encodedUrl}&text=${shareText}`,
      color: 'bg-[#0088cc]',
    },
    {
      name: t.share.reddit,
      icon: <RedditIcon />,
      url: `https://www.reddit.com/submit?url=${encodedUrl}&title=${shareText}`,
      color: 'bg-[#FF4500]',
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for non-https or old browsers
      try {
        const input = document.createElement('input');
        input.value = shareUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error('Failed to copy link', fallbackErr);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 py-8 px-4">
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">
        {t.share.title}
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${platform.color} w-12 h-12 rounded-2xl text-white shadow-xl shadow-opacity-20 hover:shadow-opacity-40 transform hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center`}
            title={platform.name}
          >
            {platform.icon}
          </a>
        ))}
        <button
          onClick={copyToClipboard}
          className="bg-slate-800 w-12 h-12 rounded-2xl text-white shadow-xl shadow-slate-900/20 transform hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center relative group"
          title={t.share.copy}
        >
          {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
          {copied && (
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider py-2 px-3 rounded-lg shadow-xl shadow-black/20 animate-in fade-in zoom-in slide-in-from-bottom-2 duration-300">
              {t.share.copied}
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
