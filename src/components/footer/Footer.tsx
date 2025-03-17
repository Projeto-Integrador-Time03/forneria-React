import React from "react";
import { Linkedin, Instagram, Facebook, MapPin, Phone, Mail, Clock } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#222222] text-white">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-yellow-800">Forneria 77</h3>
            <p className="text-gray-300 max-w-sm">
              Saboreie a autêntica pizza italiana com ingredientes frescos e de qualidade.
              Nossa missão é proporcionar momentos únicos através de sabores inesquecíveis.
            </p>
            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/school/generationbrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-800 transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/generationbrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-800 transition-colors duration-300 transform hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/generationbrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-800 transition-colors duration-300 transform hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Informações de Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group hover:text-yellow-800 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-yellow-800 group-hover:scale-110 transition-transform" />
                <p>Rua dois, 102 - Centro, Rio de Janeiro, RJ - Brasil</p>
              </div>
              <div className="flex items-center gap-3 group hover:text-yellow-800 transition-colors duration-300">
                <Phone className="w-5 h-5 text-yellow-800 group-hover:scale-110 transition-transform" />
                <p>JB (21) 97777-7777</p>
              </div>
              <div className="flex items-center gap-3 group hover:text-yellow-800 transition-colors duration-300">
                <Mail className="w-5 h-5 text-yellow-800 group-hover:scale-110 transition-transform" />
                <p>contato@forneria77.com.br</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Horário de Funcionamento</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <Clock className="w-5 h-5 text-yellow-800 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium">Restaurante</p>
                  <p className="text-gray-300">Segunda a Quinta: 12h às 16h e 17h às 00h</p>
                  <p className="text-gray-300">Sexta e Sábado: 12h às 01h</p>
                  <p className="text-gray-300">Domingo: 12h às 00h</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <Clock className="w-5 h-5 text-yellow-800 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium">Delivery</p>
                  <p className="text-gray-300">Dom. a Qui.: 18h às 23h59</p>
                  <p className="text-gray-300">Sex. e Sáb.: 18h às 00h59</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative h-full w-full min-h-[250px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.356219020248!2d-43.18618532545543!3d-22.902444237626178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f58a6a00a9d%3A0x4eb7f459ff778549!2sR.%20Dois%2C%20102%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020230-120!5e0!3m2!1spt-BR!2sbr!4v1709066036814!5m2!1spt-BR!2sbr"
              className="absolute inset-0 w-full h-full rounded-lg border-2 border-yellow-800"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#1E1E1E] py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Forneria 77. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-yellow-800 transition-colors duration-300">Política de Privacidade</a>
              <a href="#" className="hover:text-yellow-800 transition-colors duration-300">Termos de Uso</a>
              <a href="#" className="hover:text-yellow-800 transition-colors duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
