import { motion } from "framer-motion";
import { Award, Clock, Users, Utensils } from "lucide-react";

function Sobre() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section com overlay gradiente melhorado */}
      <div
        className="w-full h-[500px] bg-cover bg-fixed bg-center flex items-center justify-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <h1 className="text-6xl font-bold text-white text-center drop-shadow-lg">
            Nossa História
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4">
            Uma jornada de sabor e tradição desde 1977
          </p>
        </motion.div>
      </div>

      {/* História da Pizzaria com decoração */}
      <div className="max-w-6xl mx-auto px-4 py-20 relative">
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-800/10 rounded-full -z-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 relative">
              <span className="relative">
                Uma Tradição que Começou em 1977
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-800"></div>
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              A Forneria 77 nasceu do sonho de uma família italiana que chegou ao Brasil com 
              uma missão: trazer o verdadeiro sabor da pizza napolitana para o Rio de Janeiro. 
              Desde nossa fundação em 1977, mantemos viva a tradição das receitas originais, 
              combinando-as com inovações que atendem às necessidades modernas.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Nossa história é marcada pela busca constante pela excelência, desde a seleção 
              dos ingredientes mais frescos até o cuidado artesanal com cada pizza que sai 
              de nosso forno. Hoje, somos referência não apenas em pizzas tradicionais, 
              mas também em opções saudáveis e inclusivas.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?q=80&w=1470&auto=format&fit=crop"
              alt="Nossa História"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-6 -left-6 bg-yellow-800 text-white p-6 rounded-lg shadow-lg">
              <p className="text-3xl font-bold">45+</p>
              <p className="text-sm uppercase tracking-wider">Anos de Tradição</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Nossos Valores com design aprimorado */}
      <div className="bg-gray-200 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6 relative inline-block">
              Nossos Valores
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-800"></div>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Construímos nossa reputação sobre valores sólidos que guiam cada aspecto 
              do nosso trabalho.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Utensils className="w-10 h-10" />,
                title: "Qualidade",
                description: "Ingredientes premium e técnicas tradicionais",
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Família",
                description: "Ambiente acolhedor e familiar",
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Excelência",
                description: "Compromisso com a satisfação total",
              },
              {
                icon: <Clock className="w-10 h-10" />,
                title: "Inovação",
                description: "Tradição que se renova constantemente",
              },
            ].map((valor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-yellow-800 mb-6 flex justify-center">{valor.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{valor.title}</h3>
                <p className="text-gray-600">{valor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Nossa Equipe com layout melhorado */}
      <div className="w-screen bg-[url('https://img.freepik.com/free-photo/close-up-person-cooking_23-2150980258.jpg?t=st=1742784378~exp=1742787978~hmac=f842ab830d204b1884456c2bbae04b317e1006e759704197ec56f7d86c3ee91a&w=1380')] bg-cover bg-fixed py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="bg-white/90 backdrop-blur-sm py-6 rounded-lg shadow-lg inline-block px-10">
              <h2 className="text-4xl font-bold text-gray-800 mb-6 relative inline-block">
                Nossa Equipe
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-800"></div>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Conheça os talentosos profissionais que dão vida à Forneria 77
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Estefany Santos",
                role: "Chef de Desenvolvimento",
                image: "https://media.licdn.com/dms/image/v2/D4D03AQHN04aZzxKmiQ/profile-displayphoto-shrink_800_800/B4DZQJih5kHMAg-/0/1735326834924?e=1745452800&v=beta&t=eX_pordFNUA0IgVfCxVVSesdVfyEeYWsZqMUGxlv03k",
              },
              {
                name: "Kevin Schuab",
                role: "Mestre Pizzaiolo Digital",
                image: "https://media.licdn.com/dms/image/v2/D4E03AQF8VthgB77_ow/profile-displayphoto-shrink_800_800/B4EZPakn1aHAAc-/0/1734538854404?e=1745452800&v=beta&t=D7kt5niFFUhAvPI9Tf_d1yF5aAGG7lOh-hqH8Y6Q0iE",
              },
              {
                name: "Lucas Matheus",
                role: "Especialista em Sabores Web",
                image: "https://media.licdn.com/dms/image/v2/D5603AQFSljdawRnsbA/profile-displayphoto-shrink_800_800/B56ZPmkDc.G8Ac-/0/1734740032142?e=1745452800&v=beta&t=z-B7lgKHJQv6pYzMuDCadhDginSQwZUHJjWDgt19CAk",
              },
              {
                name: "Sarah Tavares",
                role: "Sommelier de Códigos",
                image: "https://media.licdn.com/dms/image/v2/D4D03AQEY-Af7-AXfPg/profile-displayphoto-shrink_800_800/B4DZOoe6CPGUAc-/0/1733698495456?e=1745452800&v=beta&t=DjFeM1Gx1Yk8FIOcynoI-utXYV9tNlatubIci-LF4KI",
              },
              {
                name: "Priscila Soares",
                role: "Artesã de Interfaces",
                image: "https://media.licdn.com/dms/image/v2/D4D03AQH4PKAUH_TUdw/profile-displayphoto-shrink_800_800/B4DZUmlmvKHYAg-/0/1740109148676?e=1745452800&v=beta&t=JKXCcXLrK7jhAnqXLvkn3Wk_vGC2g9M9zYrOJaxZfOs",
              },
              {
                name: "Rayane Moara",
                role: "Guardiã das Receitas Digitais",
                image: "https://media.licdn.com/dms/image/v2/D4D03AQEZ_hr3JWC3tg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731072441577?e=1745452800&v=beta&t=hCy2netyGmUS5jj2s6UGi3p13ka5S9VHKbF7S-sKCpE",
              },
            ].map((membro, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 border-yellow-800/20"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('https://img.freepik.com/free-photo/pizza-pattern-background_23-2147633694.jpg?w=1380&t=st=1740118900~exp=1740119500~hmac=5a5d4a9c5df1f1d5d5f1d5d5f1d5d5f1d5d5f1d5d5f1d5d5f1d5d5f1d5d5f')] opacity-10"></div>
                  <img
                    src={membro.image}
                    alt={membro.name}
                    className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center relative">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-yellow-800 rounded-full flex items-center justify-center text-white">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{membro.name}</h3>
                  <p className="text-yellow-800 font-medium">{membro.role}</p>
                  <div className="mt-4 pt-4 border-t border-yellow-800/20">
                    <p className="text-sm text-gray-600 italic">"A paixão pela pizza está em cada linha de código que escrevemos."</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
