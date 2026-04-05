import { ModuleDefinition } from "@/types/assessment";

export const copdModule: ModuleDefinition = {
  id: "copd",
  titleEn: "COPD & Lung Risk Assessment",
  titleDe: "COPD- & Lungen-Risikoabschätzung",
  titleTr: "KOAH ve Akciğer Riski Değerlendirmesi",
  titleRu: "Оценка риска ХОБЛ и легких",
  titlePl: "Ocena Ryzyka POChP i Płuc",
  titleUk: "Оцінка ризику ХОЗЛ та легень",
  titleRo: "Evaluarea Riscului de BPOC și Pulmonar",
  titleAr: "تقييم مخاطر الانسداد الرئوي المزمن والرئة",
  descriptionEn: "A respiratory health screening for risk factors associated with Chronic Obstructive Pulmonary Disease (COPD) and lung health.",
  descriptionDe: "Ein Screening der Atemwegsgesundheit auf Risikofaktoren im Zusammenhang mit chronisch obstruktiver Lungenerkrankung (COPD) und Lungengesundheit.",
  descriptionTr: "Kronik Obstrüktif Akciğer Hastalığı (KOAH) ve akciğer sağlığı ile ilişkili risk faktörleri için bir solunum sağlığı taraması.",
  descriptionRu: "Скрининг здоровья дыхательных путей на наличие факторов риска, связанных с Хронической обструктивной болезнью легких (ХОБЛ) и общим состоянием легких.",
  descriptionPl: "Badanie dróg oddechowych pod kątem czynników ryzyka związanych z Przewlekłą Obturacyjną Chorobą Płuc (POChP) i ogólnym stanem płuc.",
  descriptionUk: "Скринінг стану дихальних шляхів на наявність факторів ризику, пов'язаних із Хронічним обструктивним захворюванням легень (ХОЗЛ).",
  descriptionRo: "O evaluare a sănătății respiratorii pentru factorii de risc asociați cu bronhopneumopatia obstructivă cronică (BPOC) și sănătatea pulmonară.",
  descriptionAr: "فحص لصحة الجهاز التنفسي لعوامل الخطر المرتبطة بمرض الانسداد الرئوي المزمن (COPD) وصحة الرئة.",
  thresholds: {
    elevated: 30,
    high: 60,
  },
  questions: [
    {
      id: "smoking_history",
      textEn: "Do you currently smoke or have you smoked regularly in the past?",
      textDe: "Rauchen Sie aktuell oder haben Sie in der Vergangenheit regelmäßig geraucht?",
      textTr: "Şu anda sigara içiyor musunuz veya geçmişte düzenli olarak içtiniz mi?",
      textRu: "Вы курите в данный момент или курили регулярно в прошлом?",
      textPl: "Czy obecnie palisz papierosy lub paliłeś regularnie w przeszłości?",
      textUk: "Ви курите зараз або курили регулярно в минулому?",
      textRo: "Fumați în prezent sau ați fumat regulat în trecut?",
      textAr: "هل تدخن حالياً أو كنت تدخن بانتظام في الماضي؟",
      options: [
        { id: "never", labelEn: "Never smoked regularly", labelDe: "Nie regelmäßig geraucht", labelTr: "Hiç düzenli içmedim", labelRu: "Никогда не курил регулярно", labelPl: "Nigdy nie paliłem regularnie", labelUk: "Ніколи не курив регулярно", labelRo: "Niciodată nu am fumat regulat", labelAr: "لم أدخن بانتظام أبداً", points: 0 },
        { id: "past", labelEn: "I have quit smoking", labelDe: "Ich habe das Rauchen aufgegeben", labelTr: "Sigarayı bıraktım", labelRu: "Я бросил курить", labelPl: "Rzuciłem palenie", labelUk: "Я кинув палити", labelRo: "M-am lăsat de fumat", labelAr: "توقفت عن التدخين", points: 15 },
        { id: "current", labelEn: "I currently smoke", labelDe: "Ich rauche aktuell", labelTr: "Şu anda sigara içiyorum", labelRu: "Я курю", labelPl: "Obecnie palę", labelUk: "Зараз курю", labelRo: "Fumez în prezent", labelAr: "أنا أدخن حالياً", points: 25 },
      ]
    },
    {
      id: "cough",
      textEn: "Do you have a persistent cough (often with mucus) most days for at least 3 months a year?",
      textDe: "Haben Sie an den meisten Tagen einen anhaltenden Husten (oft mit Schleim) für mindestens 3 Monate im Jahr?",
      textTr: "Yılda en az 3 ay boyunca çoğu gün kalıcı bir öksürüğünüz (genellikle balgamlı) var mı?",
      textRu: "Беспокоит ли вас постоянный кашель (часто с мокротой) большую часть дней как минимум 3 месяца в году?",
      textPl: "Czy cierpisz na uporczywy kaszel (często z flegmą) przez większość dni przez co najmniej 3 miesiące w roku?",
      textUk: "Чи маєте ви постійний кашель (часто з мокротиннням) більшість днів протягом принаймні 3 місяців на рік?",
      textRo: "Aveți o tuse persistentă (adesea cu mucus) în majoritatea zilelor timp de cel puțin 3 luni pe an?",
      textAr: "هل تعاني من سعال مستمر (غالباً مع وجود بلغم) في معظم الأيام لمدة 3 أشهر على الأقل في السنة؟",
      options: [
        { id: "no", labelEn: "No", labelDe: "Nein", labelTr: "Hayır", labelRu: "Нет", labelPl: "Nie", labelUk: "Ні", labelRo: "Nu", labelAr: "لا", points: 0 },
        { id: "yes", labelEn: "Yes", labelDe: "Ja", labelTr: "Evet", labelRu: "Да", labelPl: "Tak", labelUk: "Так", labelRo: "Da", labelAr: "نعم", points: 15 },
      ]
    },
    {
      id: "breathlessness",
      textEn: "Do you experience shortness of breath more easily than others your age (e.g., when walking fast or on an incline)?",
      textDe: "Leiden Sie schneller unter Kurzatmigkeit als andere in Ihrem Alter (z. B. beim schnellen Gehen oder an einer Steigung)?",
      textTr: "Yaşınızdakilere göre daha kolay nefes darlığı yaşıyor musunuz (örneğin hızlı yürürken veya yokuşta)?",
      textRu: "Чувствуете ли вы одышку быстрее, чем другие люди вашего возраста (например, при быстрой ходьбе или подъеме на склон)?",
      textPl: "Czy doświadczasz duszności częściej niż inne osoby w Twoim wieku (np. podczas szybkiego chodzenia lub wchodzenia pod górę)?",
      textUk: "Чи виникає у вас задишка частіше, ніж у інших людей вашого віку (наприклад, при швидкій ходьбі або підйомі вгору)?",
      textRo: "Gâfâiți mai ușor decât alte persoane de vârsta dumneavoastră (ex. când mergeți repede)?",
      textAr: "هل تشعر بضيق في التنفس بسهولة أكبر من غيرك من أبناء جيلك (على سبيل المثال، عند المشي السريع أو في المرتفعات)؟",
      options: [
        { id: "no", labelEn: "No", labelDe: "Nein", labelTr: "Hayır", labelRu: "Нет", labelPl: "Nie", labelUk: "Ні", labelRo: "Nu", labelAr: "لا", points: 0 },
        { id: "yes", labelEn: "Yes", labelDe: "Ja", labelTr: "Evet", labelRu: "Да", labelPl: "Tak", labelUk: "Так", labelRo: "Da", labelAr: "نعم", points: 15 },
      ]
    },
    {
      id: "age",
      textEn: "What is your age?",
      textDe: "Wie alt sind Sie?",
      textTr: "Kaç yaşındasınız?",
      textRu: "Сколько вам лет?",
      textPl: "Ile masz lat?",
      textUk: "Скільки вам років?",
      textRo: "Câți ani aveți?",
      textAr: "كم عمرك؟",
      options: [
        { id: "under_40", labelEn: "Under 40", labelDe: "Unter 40", labelTr: "40 Altı", labelRu: "Младше 40", labelPl: "Poniżej 40", labelUk: "До 40 років", labelRo: "Sub 40", labelAr: "أقل من 40", points: 0 },
        { id: "over_40", labelEn: "40 or older", labelDe: "40 oder älter", labelTr: "40 ve Üzeri", labelRu: "40 или старше", labelPl: "40 i więcej", labelUk: "40 або старше", labelRo: "40 sau peste", labelAr: "40 أو أكبر", points: 5 },
      ]
    },
    {
      id: "occupational_exposure",
      textEn: "Have you been exposed to significant dust, fumes, or pollutants at your workplace for long periods?",
      textDe: "Waren Sie an Ihrem Arbeitsplatz über längere Zeit erheblichem Staub, Dämpfen oder Schadstoffen ausgesetzt?",
      textTr: "İş yerinizde uzun süre yoğun toza, dumana veya kirletici maddelere maruz kaldınız mı?",
      textRu: "Подвергались ли вы воздействию значительного количества пыли, паров или загрязняющих веществ на рабочем месте в течение длительного времени?",
      textPl: "Czy przez dłuższy czas byłeś narażony na znaczne ilości pyłu, oparów lub zanieczyszczeń w miejscu pracy?",
      textUk: "Чи перебували ви під впливом значної кількості пилу, випарів або забруднювачів на роботі протягом тривалого часу?",
      textRo: "Ați fost expus la praf, fum sau poluanți la locul de muncă pentru perioade lungi?",
      textAr: "هل تعرضت لغبار أو أبخرة أو ملوثات كبيرة في مكان عملك لفترات طويلة؟",
      options: [
        { id: "no", labelEn: "No", labelDe: "Nein", labelTr: "Hayır", labelRu: "Нет", labelPl: "Nie", labelUk: "Ні", labelRo: "Nu", labelAr: "لا", points: 0 },
        { id: "yes", labelEn: "Yes", labelDe: "Ja", labelTr: "Evet", labelRu: "Да", labelPl: "Tak", labelUk: "Так", labelRo: "Da", labelAr: "نعم", points: 10 },
      ]
    }
  ],
  explanations: {
    lowEn: "You appear to have few risk factors for COPD. Protecting your lungs by avoiding pollutants and maintaining activity is essential.",
    lowDe: "Sie scheinen nur wenige Risikofaktoren für COPD zu haben. Es ist wichtig, Ihre Lunge zu schützen, indem Sie Schadstoffen ausweichen und aktiv bleiben.",
    lowTr: "KOAH için çok az risk faktörünüz var gibi görünüyor. Kirleticilerden kaçınarak ve hareketli kalarak akciğerlerinizi korumak çok önemlidir.",
    lowRu: "У вас, по всей видимости, мало факторов риска ХОБЛ. Защита легких путем отказа от курения, избегания загрязняющих веществ и поддержания активности имеет решающее значение.",
    lowPl: "U Ciebie występuje niewiele czynników ryzyka POChP. Ochrona płuc poprzez unikanie zanieczyszczeń i regularną aktywność fizyczną jest kluczowa dla Twojego zdrowia.",
    lowUk: "Схоже, у вас мало факторів ризику ХОЗЛ. Дуже важливо захищати легені, уникаючи забруднювачів та підтримуючи активний спосіб життя.",
    lowRo: "Se pare că aveți puțini factori de risc pentru BPOC. Protejarea plămânilor prin evitarea poluanților și menținerea activității este esențială.",
    lowAr: "يبدو أن لديك القليل من عوامل الخطر للإصابة بمرض الانسداد الرئوي المزمن. حماية رئتيك من خلال تجنب الملوثات والحفاظ على النشاط أمر ضروري.",
    elevatedEn: "Some of your factors are linked to lung health risks. We recommend discussing your symptoms, especially if persistent, with a healthcare professional.",
    elevatedDe: "Einige Ihrer Faktoren sind mit Risiken für die Lungengesundheit verbunden. Wir empfehlen, Ihre Symptome, insbesondere wenn sie anhalten, mit einem Arzt zu besprechen.",
    elevatedTr: "Bazı faktörleriniz akciğer sağlığı riskleriyle bağlantılıdır. Belirtilerinizi، özellikle kalıcıysa، bir sağlık uzmanıyla görüşmenizi öneririz.",
    elevatedRu: "Некоторые ваши показатели связаны с риском для здоровья легких. Мы рекомендуем обсудить ваши симптомы с врачом, особенно если кашель или одышка стали постоянными.",
    elevatedPl: "Niektóre z Twoich parametrów są powiązane z ryzykiem chorób płuc. Zalecamy omówienie objawów z lekarzem, szczególnie jeśli są one uporczywe i trwają od dłuższego czasu.",
    elevatedUk: "Деякі з ваших показників пов'язані з ризиками для здоров'я легень. Рекомендуємо обговорити ваші симптоми з лікарем, особливо якщо вони тривалі.",
    elevatedRo: "Unii dintre factorii dumneavoastră sunt legați de riscuri pentru sănătatea pulmonară. Vă recomandăm să discutați cu un medic despre simptomele dumneavoastră.",
    elevatedAr: "بعض عوامل الخطر لديك مرتبطة بمخاطر صحة الرئة. نوصي بمناقشة أعراضك، خاصة إذا كانت مستمرة، مع مختص في الرعاية الصحية.",
    highEn: "You have significant indicators for potential airway obstruction. Professional evaluation and lung function tests are highly recommended.",
    highDe: "Sie haben signifikante Indikatoren für eine potenzielle Atemwegsverengung. Eine professionelle Untersuchung und Lungenfunktionstests werden dringend empfohlen.",
    highTr: "Potansiyel hava yolu tıkanıklığı için önemli göstergeleriniz var. Profesyonel değerlendirme ve akciğer fonksiyon testleri şiddetle tavsiye edilir.",
    highRu: "У вас есть серьезные признаки возможной обструкции дыхательных путей. Настоятельно рекомендуется пройти обследование и тесты функции легких (спирометрия).",
    highPl: "Masz znaczące wskaźniki potencjalnej niedrożności dróg oddechowych. Silnie zalecamy wykonanie badań i testów wydolności płuc (np. spirometrii).",
    highUk: "Ви маєте серйозні ознаки можливої обструкції дихальних шляхів. Наполегливо радимо пройти медичне обстеження та тести функції легень.",
    highRo: "Aveți indicatori semnificativi pentru o potențială obstrucție a căilor respiratorii. Se recomandă cu tărie evaluarea profesională și teste funcționale pulmonare.",
    highAr: "لديك مؤشرات قوية على احتمال وجود انسداد في المسالك الهوائية. نوصي بشدة بإجراء تقييم متخصص واختبارات قياس وظائف الرئة."
  },
  recommendationsEn: [
    "Quit smoking immediately and avoid second-hand smoke whenever possible.",
    "Avoid areas with heavy air pollution, dust, or smoke.",
    "Stay physically active within your comfortable limits to maintain lung capacity.",
    "See your doctor to discuss specialized lung function testing (spirometry).",
    "Stay informed about air quality alerts in your area.",
    "Ensure your workspace has proper ventilation if you work with dust or chemicals.",
    "Discuss annual vaccinations like the flu shot to protect against respiratory infections."
  ],
  recommendationsDe: [
    "Hören Sie sofort mit dem Rauchen auf und meiden Sie Passivrauch, wann immer möglich.",
    "Meiden Sie Gebiete mit starker Luftverschmutzung, Staub oder Rauch.",
    "Bleiben Sie im Rahmen Ihrer Belastbarkeit körperlich aktiv, um die Lungenkapazität zu erhalten.",
    "Suchen Sie Ihren Arzt auf، um spezielle Lungenfunktionstests (Spirometrie) zu besprechen.",
    "Informieren Sie sich über Luftqualitätswarnungen in Ihrer Region.",
    "Stellen Sie sicher، dass Ihr Arbeitsplatz gut belüftet ist، wenn Sie mit Staub oder Chemikalien arbeiten.",
    "Besprechen Sie jährliche Impfungen wie die Grippeschutzimpfung zum Schutz vor Atemwegsinfektionen."
  ],
  recommendationsTr: [
    "Sigarayı derhal bırakın ve mümkünse pasif içicilikten kaçının.",
    "Hava kirliliğinin, tozun veya dumanın yoğun olduğu alanlardan uzak durun.",
    "Akciğer kapasitesini korumak için sınırlarınız dahilinde fiziksel olarak aktif kalın.",
    "Özel akciğer fonksiyon testlerini (spirometri) görüşmek için doktorunuza danışın.",
    "Bölgenizdeki hava kalitesi uyarıları hakkında bilgi sahibi olun.",
    "Toz veya kimyasallarla çalışıyorsanız iş yerinizin uygun şekilde havalandırıldığından emin olun.",
    "Solunum yolu enfeksiyonlarından korunmak için grip aşısı gibi yıllık aşıları doktorunuzla görüşün."
  ],
  recommendationsRu: [
    "Немедленно откажитесь от курения и по возможности избегайте пассивного курения.",
    "Избегайте районов с сильным загрязнением воздуха, пылью или дымом.",
    "Оставайтесь физически активными в комфортных пределах для поддержания жизненной емкости легких.",
    "Обсудите с врачом необходимость прохождения спирометрии (теста на функцию легких).",
    "Следите за оповещениями о качестве воздуха в вашем регионе.",
    "Убедитесь, что ваше рабочее место хорошо проветривается, если вы работаете с пылью.",
    "Обсудите с врачом ежегодную вакцинацию, например, прививку от гриппа, для профилактики инфекций."
  ],
  recommendationsPl: [
    "Natychmiast rzuć palenie i unikaj biernego palenia, kiedy tylko jest to możliwe.",
    "Unikaj miejsc o dużym zanieczyszczeniu powietrza, zapyleniu lub dymie.",
    "Pozostań aktywny fizycznie w granicach swoich możliwości, aby utrzymać wydolność płuc.",
    "Udaj się do lekarza, aby omówić badanie spirometryczne.",
    "Śledź alerty dotyczące jakości powietrza w swojej okolicy.",
    "Zadbaj o właściwą wentylację w pracy, jeśli masz kontakt z pyłami lub chemikaliami.",
    "Porozmawiaj z lekarzem o corocznych szczepieniach (np. na grypę), aby zapobiec infekcjom dróg oddechowych."
  ],
  recommendationsUk: [
    "Негайно киньте палити та за можливості уникайте пасивного куріння.",
    "Уникайте районів із сильним забрудненням повітря, пилом або димом.",
    "Залишайтеся фізично активними в комфортних межах для підтримки ємності легень.",
    "Зверніться до лікаря, щоб обговорити проходження тестів функції легень (спірометрії).",
    "Слідкуйте за повідомленнями про якість повітря у вашому районі.",
    "Переконайтеся, що на вашому робочому місці є належна вентиляція, якщо ви працюєте з пилом.",
    "Обсудіть щорічну вакцинацію (наприклад, від грипу) для захисту від респіраторних інфекцій."
  ],
  recommendationsRo: [
    "Renunțați imediat la fumat și evitați fumatul pasiv ori de câte ori este posibil.",
    "Evitați zonele cu poluare atmosferică puternică, praf sau fum.",
    "Rămâneți activ fizic în limitele confortului dumneavoastră pentru a menține capacitatea pulmonară.",
    "Mergeți la medic pentru a discuta despre testarea specializată a funcției pulmonare (spirometrie).",
    "Fiți informat cu privire la alertele privind calitatea aerului în zona dumneavoastră.",
    "Asigurați-vă că spațiul de lucru este ventilat corespunzător dacă lucrați cu praf sau substanțe chimice.",
    "Discutați despre vaccinările anuale, cum ar fi vaccinul antigripal, pentru protecție respiratorie."
  ],
  recommendationsAr: [
    "توقف عن التدخين فوراً وتجنب التدخين السلبي قدر الإمكان.",
    "تجنب المناطق التي تعاني من تلوث شديد في الهواء أو الغبار أو الدخان.",
    "ابقَ نشطاً بدنياً ضمن حدود راحتك للحفاظ على سعة الرئة.",
    "استشر طبيبك لمناقشة إجراء اختبارات وظائف الرئة المتخصصة (قياس التنفس).",
    "ابقَ على اطلاع بتنبيهات جودة الهواء في منطقتك.",
    "تأكد من أن مكان عملك يتمتع بتهوية مناسبة إذا كنت تعمل مع الغبار أو المواد الكيميائية.",
    "ناقش مع طبيبك التطعيمات السنوية مثل لقاح الإنفلونزا للحماية من التهابات الجهاز التنفسي."
  ]
};
