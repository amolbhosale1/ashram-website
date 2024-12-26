"use client";

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Button } from './ui/button';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === 'hi' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('hi')}
        className="font-semibold"
      >
        हिंदी
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="font-semibold"
      >
        EN
      </Button>
    </div>
  );
}