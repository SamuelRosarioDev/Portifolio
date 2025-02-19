import { useState, useEffect } from "react";

export const useTranslation = (language: "Portuguese" | "English") => {
  const [translations, setTranslations] = useState<any>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const langCode = language === "Portuguese" ? "pt" : "en";
        const response = await fetch(`/translations/${langCode}.json`);

        if (!response.ok) {
          throw new Error(`Erro ao carregar traduções: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error(error);
        setError("Falha ao carregar traduções");
      }
    };

    loadTranslations();
  }, [language]);

  return error ? { error } : translations;
};
