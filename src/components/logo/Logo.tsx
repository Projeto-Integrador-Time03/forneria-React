import React from 'react';
import { Pizza, Flame } from 'lucide-react';

// Definindo cores personalizadas no Tailwind (opcional, se estiver usando tailwind.config.js)
// Adicione isso no seu arquivo tailwind.config.js:
/*
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary-yellow': '#f8b400',
        'primary-red': '#ff4b3e',
        'secondary-gray': '#f3f4f6',
      },
    },
  },
};
*/

export function Logo() {
  return (
    <div className="relative inline-block">
      {/* Círculo decorativo ao fundo */}
      <div className="absolute inset-0 border-4 border-primary-yellow rounded-full transform -rotate-12"></div>

      {/* Conteúdo principal do logo */}
      <div className="relative px-4 py-4 sm:px-8 sm:py-6">
        {/* Ícones de pizza e chama */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <Pizza className="w-8 h-8 sm:w-10 sm:h-10 text-primary-yellow" />
          <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-primary-red" />
        </div>

        {/* Nome do restaurante */}
        <div className="text-white text-center">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-wider">ILUSTRE</h1>
          <h2 className="font-serif text-xl sm:text-2xl tracking-widest text-primary-yellow">FORNERIA</h2>
          <div className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-primary-red">77</div>
        </div>

        {/* Linha decorativa */}
        <div className="mt-4 flex justify-center">
          <div className="w-12 sm:w-16 h-1 bg-primary-yellow"></div>
        </div>

        {/* Slogan */}
        <p className="mt-3 text-sm text-gray-300 italic text-center">Tradição & Sabor</p>
      </div>
    </div>
  );
}