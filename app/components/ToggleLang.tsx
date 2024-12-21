"use client";

import React from "react";
import { useLang } from "../context/langContext";
import Image from "next/image";

function ToggleLang() {
  const { lang, setLang } = useLang();

  const languages = {
    fr: {
      flag: "./france.svg",
      name: "French",
    },
    en: {
      flag: "./united-kingdom.svg",
      name: "English",
    },
    es: {
      flag: "./spain.svg",
      name: "Spanish",
    },
  };
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative group">
        <button className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg transition-all duration-300 hover:bg-white">
          <Image
            src={languages[lang as keyof typeof languages]?.flag}
            alt={languages[lang as keyof typeof languages]?.name}
            width={16}
            height={16}
          />

          <span className="font-medium text-gray-800 text-sm">
            {languages[lang as keyof typeof languages]?.name}
          </span>
        </button>
        <div className="absolute right-0 mt-1 w-48 py-2 bg-white rounded-lg shadow-lg opacity-0 invisible transform origin-top-right scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 transition-all duration-300">
          {Object.keys(languages).map((lang) => (
            <button
              key={lang}
              className="flex items-center space-x-3 px-4 py-2 w-full hover:bg-gray-100 transition-all duration-300 ${lang === lang ? 'text-blue-500':'text-gray-800'}"
              onClick={() => setLang(lang)}
            >
              <Image
                src={languages[lang as keyof typeof languages]?.flag}
                alt={languages[lang as keyof typeof languages]?.name}
                width={16}
                height={16}
              />
              <span className="font-medium text-gray-800 text-sm">
                {languages[lang as keyof typeof languages]?.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToggleLang;
