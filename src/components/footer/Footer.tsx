import React from "react";
import { Linkedin, Instagram, Facebook } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className="w-screen">
        <div className="min-h-screen bg-gray-100">
          {/* Main Footer */}
          <footer className="bg-[#222222] text-white">
            <div
              className="w-full bg-cover bg-center py-14"
            >
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Contact Information */}
                    <div className="flex flex-col items-center text-center space-y-4">
                      <h3 className="text-2xl font-bold text-yellow-800">
                        Forneria 77
                      </h3>
                      <div className="space-y-2">
                        <p className="font-semibold">Endereço</p>
                        <p>
                          Rua dois, 102 - Centro, Rio de Janeiro, RJ - Brasil
                        </p>

                        <p className="font-semibold mt-4">Contato</p>
                        <p>JB (21) 90000-9999</p>
                        <p>contato@ilustreforneria.com.br</p>

                        <p className="font-semibold mt-4">
                          Horário de Funcionamento
                        </p>
                        <p>Segunda a Quinta: 12h às 16h e 17h às 00h</p>
                        <p>Sexta e Sábado: 12h às 01h</p>
                        <p>Domingo: 12h às 00h</p>

                        <p className="font-semibold mt-4">Delivery</p>
                        <p>JB (21) 90000-9999</p>
                        <p>Dom. a Qui.: 18h às 23h59</p>
                        <p>Sex. e Sáb.: 18h às 00h59</p>
                      </div>
                    </div>

                    {/* Map */}
                    <div className="h-[400px]">
                      <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.301603700593!2d-43.17709738447522!3d-22.90224384346783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5e9a9a9a9a9%3A0x9a9a9a9a9a9a9a9a!2sCentro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1633020000000!5m2!1spt-BR!2sbr"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          {/* Small Footer */}
          <div className="bg-[#1E1E1E] py-18">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center space-y-4">
                <p className="text-xl font-bold text-white hover:text-yellow-800 transition-colors">
                  Forneria 77 | Copyright: {currentYear}
                </p>
                <p className="text-lg text-white">
                  Acesse nossas redes sociais
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/school/generationbrasil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-800 transition-colors"
                  >
                    <Linkedin size={32} />
                  </a>
                  <a
                    href="https://www.instagram.com/generationbrasil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-800 transition-colors"
                  >
                    <Instagram size={32} />
                  </a>
                  <a
                    href="https://www.facebook.com/generationbrasil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-800 transition-colors"
                  >
                    <Facebook size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
