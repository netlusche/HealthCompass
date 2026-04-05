import { LegalDictionary } from "@/types/legal";

export const tr: LegalDictionary = {
  privacy: {
    title: "Gizlilik Politikası",
    subtitle: "Son Güncelleme: [Tarih]",
    sections: [
      {
        title: "1. Genel Bilgiler ve Zorunlu Açıklamalar",
        content: "Kişisel verilerinizin korunması bizim için çok önemlidir. Kişisel verilerinizi gizli tutuyor ve yasal veri koruma düzenlemelerine ile bu gizlilik politikasına uygun olarak işliyoruz. Uygulamamız anonimlik üzerine tasarlanmıştır. Öz değerlendirme testlerini kullanmak için kayıt olmanıza veya kimliği belirlenebilir kişisel verilerinizi vermenize gerek yoktur."
      },
      {
        title: "2. Veri Sorumlusu",
        content: "[Ad / Şirket]\n[Tebliğ Adresi]\n[Posta Kodu, Şehir]\n\nTemsil eden: [Yetkili Temsilci]\nİletişim: E-posta: [E-posta Adresi]"
      },
      {
        title: "3. Bu Web Sitesinde Veri Toplama",
        content: [
          "Barındırma (Hosting): Web sitemizi [Sağlayıcı Adı] üzerinden barındırıyoruz. Kullanım temeli, KVKK ve GDPR uyarınca meşru menfaatimizdir.",
          "Sunucu Günlük Dosyaları: Sağlayıcı, teknik olarak gerekli olan bilgileri (IP adresi, tarayıcı, sistem) otomatik olarak toplar.",
          "Yerel Depolama (Local Storage): İlerleme verileriniz yalnızca cihazınızda tutulur ve sunucularımıza aktarılmaz."
        ]
      },
      {
        title: "4. Haklarınız",
        content: "Verilerinizle ilgili bilgi alma, düzeltme, engelleme veya silme haklarına her zaman sahipsiniz."
      }
    ],
    note: "Not: Bu bir taslaktır. Lütfen yayınlamadan önce hukuki bir incelemeden geçirin."
  },
  imprint: {
    title: "Yasal Uyarı / Künye",
    sections: [
      {
        title: "Alman Kanunları (TMG § 5) uyarınca bilgiler",
        content: "[Ad / Şirket]\n[Tebliğ Adresi]\n[Posta Kodu, Şehir]\n\nİletişim: [E-posta Adresi]\nTemsil eden: [Yetkili Temsilci]"
      },
      {
        title: "Sicil Kaydı (varsa)",
        content: "Sicil Mahkemesi: [Mahkeme]\nSicil Numarası: [Numara]"
      },
      {
        title: "AB Uyuşmazlık Çözümü",
        content: "Avrupa Komisyonu çevrimiçi uyuşmazlık çözümü (OS) için bir platform sağlamaktadır: https://ec.europa.eu/consumers/odr/"
      }
    ]
  },
  disclaimer: {
    title: "Sorumluluk Reddi (Disclaimer)",
    sections: [
      {
        title: "1. İçerik Uyarı Notu",
        content: "Sunulan içeriklerin doğruluğu, eksiksizliği ve güncelliği konusunda herhangi bir sorumluluk kabul etmiyoruz."
      },
      {
        title: "2. Tıbbi Cihaz Değildir / Teşhis Koymaz",
        content: "Bu uygulama bir bilgi ve önleme hizmetidir. Öz değerlendirmeler tıbbi bir teşhis DEĞİLDİR ve profesyonel bir tıbbi muayenenin yerini TUTMAZ."
      },
      {
        title: "3. Acil Yardım Hizmeti Deغildir",
        content: "Akut semptomlar veya hayati tehlike durumunda lütfen derhal acil servisi arayın. Bir kriz veya acil durum hizmeti sağlamıyoruz."
      }
    ]
  },
  copyright: {
    title: "Telif Hakkı",
    sections: [
      {
        title: "Telif Hakkı Bildirimi",
        content: "Bu web sitesinde yayınlanan içerikler ve çalışmalar Alman telif haklarına tabidir. Telif hakkı yasası sınırları dışındaki her türlü kullanım yazılı onayımızı gerektirir."
      },
      {
        title: "Görsel Kaynakları",
        content: "[Görsel Kaynakları / Lisanslar için yer tutucu]"
      }
    ]
  },
  checklist: {
    title: "Yayından Önce Son Kontrol Listesi",
    items: [
      "Operatör ana verilerini doldurun",
      "Hosting sağlayıcısını girin",
      "Yasal formu kontrol edin (Şahıs Şirketi, GmbH, vb.)",
      "Hukuki son kontrolü yapın",
      "Kayıt bilgilerini (sicil no vb.) doğrulayın"
    ]
  }
};
