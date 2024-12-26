// "use client";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
export default function Footer() {
  const { language } = useLanguage();

  const t = translations[language];
  return (
    <footer className="bg-saffron-400 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.footer.title}</h3>
            <p className="text-saffron-100">{t.footer.subtitle}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-saffron-100 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-saffron-100 hover:text-white"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="text-saffron-100 hover:text-white"
                >
                  Location
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">{t.footer.connect}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-saffron-100 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-saffron-100 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-saffron-100 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-saffron-100 hover:text-white">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-saffron-700 text-center text-saffron-100">
          <p>
            &copy; {new Date().getFullYear()} {t.footer.title}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
