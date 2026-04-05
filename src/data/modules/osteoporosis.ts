import { ModuleDefinition } from "@/types/assessment";

export const osteoporosisModule: ModuleDefinition = {
  id: "osteoporosis",
  titleEn: "Osteoporosis Risk Assessment",
  titleDe: "Osteoporose-Risikoabschätzung",
  titleTr: "Osteoporoz Riski Değerlendirmesi",
  titleRu: "Оценка риска остеопороза",
  titlePl: "Ocena Ryzyka Osteoporozy",
  titleUk: "Оцінка ризику остеопорозу",
  titleRo: "Evaluarea Riscului de Osteoporoză",
  titleAr: "تقييم مخاطر هشاشة العظام",
  descriptionEn: "A screening for clinical risk factors associated with low bone density and increased fracture risk.",
  descriptionDe: "Ein Screening auf klinische Risikofaktoren im Zusammenhang mit geringer Knochendichte und erhöhtem Frakturrisiko.",
  descriptionTr: "Düşük kemik yoğunluğu ve artan kırık riski ile ilişkili klinik risk faktörleri için bir tarama.",
  descriptionRu: "Скрининг на наличие клинических факторов риска, связанных с низкой плотностью костной ткани и повышенным риском переломов.",
  descriptionPl: "Badanie klinicznych czynników ryzyka związanych z niską gęstością kości i zwiększonym ryzykiem złamań.",
  descriptionUk: "Скринінг клінічних факторів ризику, пов'язаних із низькою щільністю кісток та підвищеним ризиком переломів.",
  descriptionRo: "O evaluare pentru factorii de risc clinici asociați cu densitatea osoasă scăzută și riscul crescut de fracturi.",
  descriptionAr: "فحص لعوامل الخطر السريرية المرتبطة بانخفاض كثافة العظام وزيادة مخاطر الكسور.",
  thresholds: {
    elevated: 25,
    high: 55,
  },
  questions: [
    {
      id: "age_sex",
      textEn: "What is your age/sex category?",
      textDe: "In welche Alters-/Geschlechtskategorie fallen Sie?",
      textTr: "Hangi yaş/cinsiyet kategorisindesiniz?",
      textRu: "К какой возрастной и половой категории вы относитесь?",
      textPl: "W jakiej kategorii wiekowej i płciowej jesteś?",
      textUk: "До якої вікової та статевої категорії ви належите?",
      textRo: "Care este categoria dumneavoastră de vârstă/sex?",
      textAr: "ما هي فئتك العمرية والجنسية؟",
      options: [
        { id: "f_under_50", labelEn: "Female under 50", labelDe: "Frau unter 50", labelTr: "50 Yaş Altı Kadın", labelRu: "Женщина младше 50", labelPl: "Kobieta poniżej 50", labelUk: "Жінка до 50 років", labelRo: "Femeie sub 50", labelAr: "أنثى أقل من 50", points: 0 },
        { id: "f_50_64", labelEn: "Female 50-64", labelDe: "Frau 50-64", labelTr: "50-64 Yaş Kadın", labelRu: "Женщина 50-64 года", labelPl: "Kobieta 50-64", labelUk: "Жінка 50-64 роки", labelRo: "Femeie 50-64", labelAr: "أنثى 50-64", points: 8 },
        { id: "f_65_plus", labelEn: "Female 65 or older", labelDe: "Frau 65 oder älter", labelTr: "65 Yaş Üzeri Kadın", labelRu: "Женщина 65 или старше", labelPl: "Kobieta 65 i więcej", labelUk: "Жінка 65 або старше", labelRo: "Femeie 65 sau peste", labelAr: "أنثى 65 أو أكبر", points: 15 },
        { id: "m_under_70", labelEn: "Male under 70", labelDe: "Mann unter 70", labelTr: "70 Yaş Altı Erkek", labelRu: "Мужчина младше 70", labelPl: "Mężczyzna poniżej 70", labelUk: "Чоловік до 70 років", labelRo: "Bărbat sub 70", labelAr: "ذكر أقل من 70", points: 0 },
        { id: "m_70_plus", labelEn: "Male 70 or older", labelDe: "Mann 70 oder älter", labelTr: "70 Yaş Üzeri Erkek", labelRu: "Мужчина 70 или старше", labelPl: "Mężczyzna 70 i więcej", labelUk: "Чоловік 70 або старше", labelRo: "Bărbat 70 sau peste", labelAr: "ذكر 70 أو أكبر", points: 15 },
      ]
    },
    {
      id: "fracture_history",
      textEn: "Have you suffered a fracture after age 50 from a minor fall or impact?",
      textDe: "Hatten Sie nach dem 50. Lebensjahr eine Fraktur durch einen leichten Sturz oder Aufprall?",
      textTr: "50 yaşından sonra hafif bir düşme veya darbe sonucu kırık geçirdiniz mi?",
      textRu: "Был ли у вас перелом после 50 лет в результате незначительного падения или удара?",
      textPl: "Czy po 50. roku życia doznałeś złamania w wyniku niegroźnego upadku lub uderzenia?",
      textUk: "Чи траплялися у вас переломи після 50 років внаслідок незначного падіння або удару?",
      textRo: "Ați suferit vreo fractură după vârsta de 50 de ani în urma unei căderi sau a unui impact minor?",
      textAr: "هل عانيت من كسر بعد سن الخمسين نتيجة سقطة أو صدمة بسيطة؟",
      options: [
        { id: "yes", labelEn: "Yes", labelDe: "Ja", labelTr: "Evet", labelRu: "Да", labelPl: "Tak", labelUk: "Так", labelRo: "Da", labelAr: "نعم", points: 20 },
        { id: "no", labelEn: "No", labelDe: "Nein", labelTr: "Hayır", labelRu: "Нет", labelPl: "Nie", labelUk: "Ні", labelRo: "Nu", labelAr: "لا", points: 0 },
      ]
    },
    {
      id: "family_history",
      textEn: "Did either of your parents have a hip fracture?",
      textDe: "Hatte eines Ihrer Elternteile eine Hüftfraktur?",
      textTr: "Ebeveynlerinizden birinde kalça kırığı var mıydı?",
      textRu: "Был ли у кого-то из ваших родителей перелом шейки бедра?",
      textPl: "Czy któryś z Twoich rodziców doznał złamania szyjki kości udowej?",
      textUk: "Чи мав хтось із ваших батьків перелом шийки стегна?",
      textRo: "A avut vreunul dintre părinți o fractură de șold?",
      textAr: "هل تعرض أي من والديك لكسر في الورك؟",
      options: [
        { id: "yes", labelEn: "Yes", labelDe: "Ja", labelTr: "Evet", labelRu: "Да", labelPl: "Tak", labelUk: "Так", labelRo: "Da", labelAr: "نعم", points: 10 },
        { id: "no", labelEn: "No", labelDe: "Nein", labelTr: "Hayır", labelRu: "Нет", labelPl: "Nie", labelUk: "Ні", labelRo: "Nu", labelAr: "لا", points: 0 },
      ]
    },
    {
      id: "body_weight",
      textEn: "Is your body weight very low (e.g., BMI under 19)?",
      textDe: "Ist Ihr Körpergewicht sehr niedrig (z. B. BMI unter 19)?",
      textTr: "Vücut ağırlığınız çok düşük mü (örneğin VKİ 19'un altında)?",
      textRu: "У вас очень низкий вес (например, ИМТ ниже 19)?",
      textPl: "Czy Twoja waga jest bardzo niska (np. BMI poniżej 19)?",
      textUk: "Чи ваша вага занадто низька (наприклад, ІМТ до 19)?",
      textRo: "Greutatea dumneavoastră este foarte scăzutة (ex. IMC sub 19)?",
      textAr: "هل وزن جسمك منخفض جداً (على سبيل المثال، مؤشر كتلة الجسم أقل من 19)؟",
      options: [
        { id: "yes", labelEn: "Yes", labelDe: "Ja", labelTr: "Evet", labelRu: "Да", labelPl: "Tak", labelUk: "Так", labelRo: "Da", labelAr: "نعم", points: 10 },
        { id: "no", labelEn: "No", labelDe: "Nein", labelTr: "Hayır", labelRu: "Нет", labelPl: "Nie", labelUk: "Ні", labelRo: "Nu", labelAr: "لا", points: 0 },
      ]
    },
    {
      id: "lifestyle",
      textEn: "Do you smoke regularly or consume more than 3 units of alcohol daily?",
      textDe: "Rauchen Sie regelmäßig oder konsumieren Sie täglich mehr als 3 Einheiten Alkohol?",
      textTr: "Düzenli olarak sigara içiyor musunuz veya günde 3 birimden fazla alkol tüketiyor musunuz?",
      textRu: "Вы курите регулярно или употребляете более 3 единиц алкоголя в день?",
      textPl: "Czy palisz regularnie lub spożywasz więcej niż 3 jednostki alkoholu dziennie?",
      textUk: "Ви курите регулярно або вживаєте понад 3 одиниці алкоголю щодня?",
      textRo: "Fumați regulat sau consumați mai mult de 3 unități de alcool zilnic?",
      textAr: "هل تدخن بانتظام أو تستهلك أكثر من 3 وحدات من الكحول يومياً؟",
      options: [
        { id: "yes", labelEn: "Yes", labelDe: "Ja", labelTr: "Evet", labelRu: "Да", labelPl: "Tak", labelUk: "Так", labelRo: "Da", labelAr: "نعم", points: 10 },
        { id: "no", labelEn: "No", labelDe: "Nein", labelTr: "Hayır", labelRu: "Нет", labelPl: "Nie", labelUk: "Ні", labelRo: "Nu", labelAr: "لا", points: 0 },
      ]
    }
  ],
  explanations: {
    lowEn: "You appear to have few risk factors for osteoporosis. Maintaining a calcium-rich diet and weight-bearing exercise is beneficial for all ages.",
    lowDe: "Sie scheinen nur wenige Risikofaktoren für Osteoporose zu haben. Eine kalziumreiche Ernährung und gewichtsbelastende Übungen sind in jedem Alter von Vorteil.",
    lowTr: "Osteoporoz için çok az risk faktörünüz var gibi görünüyor. Kalsiyum açısından zengin bir diyet ve ağırlık egzersizleri her yaş için faydalıdır.",
    lowRu: "У вас, по всей видимости, мало факторов риска остеопороза. Соблюдение диеты, богатой кальцием, и упражнения с весовой нагрузкой полезны в любом возрасте.",
    lowPl: "U Ciebie występuje niewiele czynników ryzyka osteoporozy. Dieta bogata w wapń i ćwiczenia z obciążeniem są korzystne w każdym wieku dla zdrowia układu kostnego.",
    lowUk: "Схоже, у вас мало факторів ризику остеопорозу. Кальцієва дієта та помірні вправи корисні для всіх.",
    lowRo: "Se pare că aveți puțini factori de risc pentru osteoporoză. Menținerea unei diete bogate în calciu și exercițiile cu greutăți sunt benefice la orice vârstă.",
    lowAr: "يبدو أن لديك القليل من عوامل الخطر للإصابة بهشاشة العظام. الحفاظ على نظام غذائي غني بالكالسيوم وممارسة تمارين تحمل الوزن مفيد لجميع الأعمار.",
    elevatedEn: "You have several risk factors that can affect bone density. Monitoring your status and discussing prevention with a professional is recommended.",
    elevatedDe: "Sie haben einige Risikofaktoren, die die Knochendichte beeinflussen können. Es wird empfohlen, Ihren Status zu überwachen und die Prävention mit einem Arzt zu besprechen.",
    elevatedTr: "Kemik yoğunluğunu etkileyebilecek bazı risk faktörleriniz var. Durumunuzu izlemeniz ve bir uzmanla önlemeyi görüşmeniz önerilir.",
    elevatedRu: "У вас есть несколько факторов риска, которые могут повлиять на плотность костей. Мы рекомендуем следить за своим состоянием и обсуждать меры профилактики с врачом.",
    elevatedPl: "Masz kilka czynników ryzyka, które mogą wpływać na gęstość kości. Zalecamy monitorowanie stanu zdrowia i omówienie działań profilaktycznych z lekarzem.",
    elevatedUk: "Деякі з ваших показників можуть вплинути на щільність кісток. Рекомендуємо стежити за станом здоров'я та обговорити профілактику з лікарем.",
    elevatedRo: "Aveți mai mulți factori de risc care pot afecta densitatea osoasă. Se recomandă monitorizarea stării dumneavoastră și discutarea prevenirii cu un medic.",
    elevatedAr: "لديك عدة عوامل خطر يمكن أن تؤثر على كثافة العظام. يوصى بمراقبة حالتك ومناقشة سبل الوقاية مع مختص.",
    highEn: "Your profile indicates a significantly higher risk for osteoporosis and fractures. We strongly recommend clinical evaluation and bone density testing (DEXA).",
    highDe: "Ihr Profil deutet auf ein deutlich höheres Risiko für Osteoporose und Frakturen hin. Wir empfehlen dringend eine klinische Untersuchung und Knochendichtemessung (DEXA).",
    highTr: "Profiliniz osteoporoz ve kırıklar için önemli ölçüde daha yüksek bir risk göstermektedir. Klinik değerlendirme ve kemik yoğunluğu testi (DEXA) yaptırmanızı şiddetله öneririz.",
    highRu: "Ваш профиль указывает на значительно более высокий риск остеопороза и переломов. Настоятельно рекомендуем пройти обследование и измерение плотности костей (денситометрия/DEXA).",
    highPl: "Twój profil wskazuje na znacznie wyższe ryzyko osteoporozy i złamań. Silnie zalecamy profesjonalną ocenę medyczną i badanie gęstości kości (densytometrię/DEXA).",
    highUk: "Ваш профіль вказує на вищий ризик остеопорозу та переломів. Наполегливо радимо пройти обстеження та вимірювання щільності кісток.",
    highRo: "Profilul dumneavoastră indică un risc semnificativ mai mare de osteoporoză și fracturi. Vă recomandăm cu tărie o evaluare clinică și testarea densității osoase (DEXA).",
    highAr: "يشير ملفك الشخصي إلى خطر أعلى بكثير للإصابة بهشاشة العظام والكسور. نوصي بشدة بإجراء تقييم سريري واختبار كثافة العظام (DEXA)."
  },
  recommendationsEn: [
    "Ensure adequate intake of Calcium and Vitamin D through diet and sunlight.",
    "Engage in regular weight-bearing exercises (e.g., walking, strength training).",
    "Quit smoking and limit alcohol consumption to protect bone health.",
    "Address potential fall hazards at home to prevent injury.",
    "Talk to your doctor about professional bone density screening (DEXA scan).",
    "Review medications that might affect bone health with your physician.",
    "Incorporate balance exercises like Tai Chi or Yoga into your routine."
  ],
  recommendationsDe: [
    "Achten Sie auf eine ausreichende Zufuhr von Kalzium und Vitamin D durch Ernährung und Sonnenlicht.",
    "Machen Sie regelmäßig gewichtsbelastende Übungen (z. B. Gehen, Krafttraining).",
    "Geben Sie das Rauchen auf und begrenzen Sie den Alkoholkonsum, um die Knochengesundheit zu schützen.",
    "Beseitigen Sie potenzielle Sturzgefahren in der Wohnung, um Verletzungen vorzubeugen.",
    "Sprechen Sie mit Ihrem Arzt über eine professionelle Knochendichtemessung (DEXA-Scan).",
    "Besprechen Sie Medikamente, die die Knochengesundheit beeinflussen könnten, mit Ihrem Arzt.",
    "Integrieren Sie Gleichgewichtsübungen wie Tai-Chi oder Yoga in Ihren Tagesablauf."
  ],
  recommendationsTr: [
    "Diyet ve güneş ışığı yoluyla yeterli Kalsiyum ve D Vitamini alımını sağlayın.",
    "Düzenli ağırlık taşıyan egzersizler yapın (örneğin yürüyüş, kuvvet antrenmanı).",
    "Kemik sağlığını korumak için sigarayı bırakın ve alkol tüketimini sınırlayın.",
    "Yaralanmaları önlemek için evdeki potansiyel düşme tehlikelerini giderin.",
    "Profesyonel kemik yoğunluğu taraması (DEXA taraması) hakkında doktorunuzla konuşun.",
    "Kemik sağlığını etkileyebilecek ilaçlarınızı doktorunuzla birlikte gözden geçيرين.",
    "Tai Chi veya Yoga gibi denge egzersizlerini rutininize dahil edin."
  ],
  recommendationsRu: [
    "Обеспечьте достаточное потребление кальция и витамина D с пищей и пребыванием на солнце.",
    "Занимайтесь регулярными физическими упражнениями с весовой нагрузкой (ходьба, силовые тренировки).",
    "Откажитесь от курения и ограничьте алкоголь для защиты здоровья костей.",
    "Устраните возможные опасности падения дома для профилактики травм.",
    "Обсудите с врачом необходимость прохождения денситометрии (DEXA-сканирование).",
    "Проконсультируйтесь с врачом по поводу лекарств, которые могут влиять на прочность костей.",
    "Включите упражнения на баланс, такие как тай-чи или йога, в свой распорядок дня."
  ],
  recommendationsPl: [
    "Zadbaj o odpowiednie spożycie wapnia i witaminy D w diecie oraz poprzez ekspozycję na słońце.",
    "Podejmuj regularne ćwiczenia z obciążeniem (np. spacery, trening siłowy).",
    "Rzuć palenie i ogranicz alkohol, aby chronić zdrowie swoich kości.",
    "Zadbaj o bezpieczeństwo w domu, aby uniknąć groźnych upadków.",
    "Porozmawiaj z lekarzem o profesjonalnym badaniu gęstości kości (densytometrii).",
    "Przejrzyj z lekarzem listę przyjmowanych leków pod kątem ich wpływu na zdrowie kości.",
    "Wprowadź do planu dnia ćwiczenia ogólnousprawniające i równoważne, takie jak joga czy tai-chi."
  ],
  recommendationsUk: [
    "Забезпечте достатнє споживання кальцію та вітаміну D з їжею та сонцем.",
    "Займайтеся регулярними вправами (ходьба, силові тренування).",
    "Киньте палити та обмежте алкоголь для здоров'я кісток.",
    "Усуньте вдома небезпеки падіння для запобігання травмам.",
    "Обговоріть із лікарем необхідність вимірювання щільності кісток.",
    "Перевірте з лікарем ліки, що можуть впливати на міцність кісток.",
    "Додайте вправи на баланс (йога, тай-чи) до свого розпорядку."
  ],
  recommendationsRo: [
    "Asigurați un aport adecvat de calciu și vitamina D prin dietă și expunere la soare.",
    "Efectuați exerciții regulate cu greutăți (ex. mers pe jos, antrenament de forță).",
    "Renunțați la fumat și limitați consumul de alcool pentru a proteja sănătatea oaselor.",
    "Eliminați potențialele pericole de cădere în casă pentru a preveni rănirile.",
    "Discutați cu medicul dumneavoastră despre o scanare profesională DEXA.",
    "Analizați cu medicul medicamentele care ar putea afecta sănătatea oaselor.",
    "Incorporează exerciții de echilibru, cum ar fi Tai Chi sau Yoga."
  ],
  recommendationsAr: [
    "تأكد من تناول كميات كافية من الكالسيوم وفيتامين د من خلال النظام الغذائي وأشعة الشمس.",
    "مارس تمارين تحمل الوزن بانتظام (مثل المشي، تمارين القوة).",
    "توقف عن التدخين وقلل من استهلاك الكحول لحماية صحة العظام.",
    "قم بمعالجة مخاطر السقوط المحتملة في المنزل لمنع الإصابة.",
    "تحدث مع طبيبك حول إجراء فحص احترافي لكثافة العظام (DEXA scan).",
    "راجع الأدوية التي قد تؤثر على صحة العظام مع طبيبك.",
    "قم بدمج تمارين التوازن مثل التاي تشي أو اليوغا في روتينك."
  ]
};
