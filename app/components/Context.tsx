"use client";

import React from "react";
import en from "@/public/locales/en/common.json";
import fr from "@/public/locales/fr/common.json";
import es from "@/public/locales/es/common.json";
import { images } from "@/app/dataImg";
import { useLang } from "../context/langContext";
import { Destination, Feature, Translations } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";

export default function Context() {
  const translations: Record<string, Translations> = {
    fr,
    en,
    es,
  };

  const { lang } = useLang();
  const t = translations[lang];
  const getDestination = (key: string): Destination => {
    const dest = t.destinations[key];
    if (typeof dest === "string") throw new Error("Destination not found");
    return dest as Destination;
  };
  const getFeature = (key: string): Feature => {
    const dest = t.features[key];
    if (typeof dest === "string") throw new Error("Feature not found");
    return dest as Destination;
  };

  return (
    <>
    <section className="min-h-screen">
      <div className="relative h-screen">
        <div className=" w-full h-full ">
          <Image
            src={images.hero}
            alt="hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40">
            <div className="container mx-auto px-4 h-full flex items-center">
                <div className="text-white max-w-2xl">
                    <h1 className="text-6xl font-bold mb-6 animate-fade-in">{t.hero.title}</h1>
                    <p className="text-lg mb-8">{t.hero.subtitle}</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg 
                    text-md transform hover:scale-105 transition-all duration-300 animate-fade-in-delay-2">
                        {t.hero.cta}
                    </button>
                
                </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-10 text-center">
            {t.destinations.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
            {
                Object.entries(images.destinations).map(([city,imageUrl]) => {
                    const destination = getDestination(city);
                    return (
                        <div key={city} className="rounded-lg overflow-hidden shadow-lg bg-white">
                            <div className="relative h-64">
                                <Image src={imageUrl} alt={destination.title} fill className="object-cover"/>

                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{destination.title}</h3>
                                <p className="text-gray-600 text-sm">{destination.description}</p>


                            </div>
                        </div>
                    )
                })
            }
            </div>

                
     

        </div>
    </section>
    <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-10 text-center">
            {t.features.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
            {
                Object.entries(images.features).map(([city,imageUrl]) => {
                    const feature = getFeature(city);
                    return (
                        <div key={city} className="rounded-lg overflow-hidden shadow-lg bg-white py-4">
                            <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                                <Image src={imageUrl} alt={feature.title} fill className="object-cover"/>

                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>


                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    </section>
    <section className="bg-blue-500 py-20">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-10 text-center text-white">
                {t.cta.title}
            </h2>
            <p className="text-xl mb-8 text-white">
             {   t.cta.subtitle}

            </p>
            <button className="bg-white text-blue-500 px-8 py-3 rounded-lg text-lg hover:bg-gray-100 transition-all duration-300">
                {t.cta.button}
            </button>
        </div>
    </section>
    <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {images.gallery.map((imgUrl,index)=>{
                    return (
                        <div key={index} className="relative h-64 overflow-hidden rounded-lg group">
                            <Image src={imgUrl} alt="gallery" fill className="object-cover transform group-hover:scale-110 transition-transform duration-300"/>

                        </div>
                    )
                })}
            </div>
        </div>
    </section>
   <footer className="py-8 bg-gray-900 text-white">
    <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
           <p>
            {t.footer.rights}
           </p>
         </div>

    </div>
  
   </footer>
    </>
    
  );
}
