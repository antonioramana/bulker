import React, { createContext, useState } from 'react';
import translate from 'google-translate-api-browser'; // API de traduction

export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr'); // Langue par défaut
  const [translations, setTranslations] = useState({});

  const translateContent = async (text) => {
    const result = await translate(text, { to: language === 'fr' ? 'fr' : 'en' });
    return result.text;
  };

  const translateTexts = async (texts) => {
    const translated = await Promise.all(texts.map(translateContent));
    return translated;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translateContent, translateTexts }}>
      {children}
    </TranslationContext.Provider>
  );
};
