import React, { useState } from 'react';

export default function LanguageToggle({
  onChange
}: {
  onChange: (lang: string) => void;
}) {
  const [language, setLanguage] = useState<'en' | 'ua'>('en');

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ua' : 'en';
    setLanguage(newLang);
    onChange(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
    >
      {language === 'en' ? '🇺🇸 EN' : '🇺🇦 UA'}
    </button>
  );
}
// TODO MAKE WHOLE SITE CHANGING LANGUAGE AND AI ASSISTANT
