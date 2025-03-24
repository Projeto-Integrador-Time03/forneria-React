import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Importe o CSS do Swiper


function Home() {
  return (
    <div className="w-screen bg-white mb-20">
      {/* Seção principal com imagem de fundo */}
      <div
        className="w-screen h-[750px] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4 relative overflow-hidden"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/delicious-pizza-indoors_23-2150873878.jpg?t=st=1742782272~exp=1742785872~hmac=b6244a4642de6f03dae5aa40a5fe8856ae3390d1d86080914b85acf18ca15be0&w=1380)",
        }}
      >
        {/* Overlay com textura */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        
        {/* Elementos decorativos */}
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-dashed border-yellow-500/30 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-dashed border-yellow-500/30 rounded-full"></div>
        
        {/* Conteúdo principal */}
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Selo de autenticidade */}
          <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-yellow-800/80 flex items-center justify-center transform rotate-12 border-4 border-double border-yellow-600 shadow-lg hidden md:flex">
            <span className="text-white font-serif text-lg text-center">Autêntica<br/>Pizza<br/>Italiana</span>
          </div>
          
          <h2 className="font-serif text-6xl font-bold drop-shadow-lg mb-6 text-yellow-50">
            Seja Bem-Vindo à <span className="text-yellow-400 italic">Forneria 77!</span>
          </h2>
          
          <p className="text-xl mt-4 drop-shadow-md max-w-2xl mx-auto font-light">
            Sabor sem regras, do clássico ao saudável. Nossa tradição italiana de mais de 40 anos traz o melhor da gastronomia para sua mesa.
          </p>
          
          <Link to={`/cardapio`}>
            <button className="mt-8 bg-yellow-800 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 border-b-4 border-yellow-900 group">
              <span className="flex items-center">
                Ver Cardápio 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </Link>
          
          {/* Decoração inferior */}
          <div className="flex justify-center mt-12 space-x-4">
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-white rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Seção "Por que nos escolher?" */}
      <div className="relative py-16 bg-gradient-to-b from-white to-yellow-50 overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <img src="/pizza-pattern.png" alt="" className="absolute w-full h-full object-cover" 
               onError={(e) => {e.currentTarget.style.display = 'none'}} />
        </div>
        <div className="absolute -left-20 top-10 w-40 h-40 rounded-full bg-yellow-800/10"></div>
        <div className="absolute -right-20 bottom-10 w-40 h-40 rounded-full bg-yellow-800/10"></div>
        
        {/* Ícone decorativo de pizza */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-20 h-20 bg-yellow-800 rounded-full flex items-center justify-center shadow-lg">
          <img src="/icons/pizza-icon.svg" alt="Pizza" className="w-10 h-10 text-white" 
               onError={(e) => {e.currentTarget.src = "https://img.icons8.com/ios/50/ffffff/pizza.png"}} />
        </div>
        
        <div id="sobre-nos" className="text-center mt-4 mb-12 transition duration-300 relative z-10">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6 pb-2 text-gray-800 relative inline-block"
          >
            Por que nos escolher?
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-800"></div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 bg-white border-2 border-yellow-800 rounded-full flex items-center justify-center -mb-4">
              <span className="text-yellow-800 text-xl font-serif">77</span>
            </div>
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mt-8 text-gray-600 max-w-3xl mx-auto px-6"
          >
            Há mais de quatro décadas, servimos as melhores pizzas da cidade com ingredientes selecionados e receitas exclusivas.
          </motion.p>
        </div>
      </div>

      {/* Sobre Nós - Layout Aprimorado */}
      <div className="max-w-7xl mx-auto px-6 mb-20 relative">
        {/* Elementos decorativos sutis */}
        <div className="absolute -left-10 top-20 w-20 h-20 rounded-full bg-yellow-800/5 z-0"></div>
        <div className="absolute -right-10 bottom-20 w-20 h-20 rounded-full bg-yellow-800/5 z-0"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto à Esquerda com Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-yellow-800"
              >
                <h4 className="text-xl font-bold text-yellow-800 mb-2 flex items-center">
                  <span className="w-6 h-6 bg-yellow-800 rounded-full flex items-center justify-center text-white mr-2 text-xs">1</span>
                  Tradição & Inovação
                </h4>
                <p className="text-gray-700">
                  Na Forneria 77, reinventamos a forma de saborear pizza, combinando receitas tradicionais com inovações que surpreendem. Acreditamos que todo mundo merece saborear uma boa pizza do jeito que mais gosta!
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-yellow-800"
              >
                <h4 className="text-xl font-bold text-yellow-800 mb-2 flex items-center">
                  <span className="w-6 h-6 bg-yellow-800 rounded-full flex items-center justify-center text-white mr-2 text-xs">2</span>
                  Sabor Para Todos
                </h4>
                <p className="text-gray-700">
                  Seja você fã do fast food tradicional ou alguém que busca uma alimentação mais equilibrada, temos opções para todos os gostos. Nossas receitas tradicionais têm ingredientes selecionados, massas macias e recheios generosos.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-yellow-800"
              >
                <h4 className="text-xl font-bold text-yellow-800 mb-2 flex items-center">
                  <span className="w-6 h-6 bg-yellow-800 rounded-full flex items-center justify-center text-white mr-2 text-xs">3</span>
                  Equilíbrio & Prazer
                </h4>
                <p className="text-gray-700">
                  Acreditamos que uma alimentação equilibrada não precisa abrir mão do prazer. Nosso cardápio é pensado para quem busca opções rápidas, nutritivas e deliciosas, com ingredientes frescos, orgânicos e de alta qualidade.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Imagens com Carrossel */}
          <div className="relative">
            {/* Primeira Imagem */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-80 rounded-xl shadow-xl overflow-hidden"
            >
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                speed={1000}
                loop
                className="w-full h-full"
              >
                <SwiperSlide>
                  <img
                    src="https://i.pinimg.com/736x/33/b3/a6/33b3a636d41b202d1db0092841f57d7d.jpg"
                    alt="Pizza Artesanal"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">Pizzas Artesanais</h3>
                      <p className="text-sm">Tradição italiana em cada fatia</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </motion.div>
            
            {/* Selo de qualidade */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-yellow-800 rounded-full flex items-center justify-center text-white font-serif text-center text-xs transform rotate-12 shadow-lg border-2 border-double border-yellow-600 z-10">
              <span>Desde<br/>1977</span>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa Profissional de Pizzaria */}
      <div className="w-full bg-yellow-900 py-10 relative overflow-hidden">
        {/* Textura de madeira ao fundo */}
        <div className="absolute inset-0 bg-[url('/wood-texture.jpg')] opacity-20 mix-blend-multiply"></div>
        
        {/* Padrão de pizza estilizado no fundo */}
        <div className="absolute -left-16 -top-16 w-32 h-32 rounded-full border-4 border-dashed border-yellow-600/30"></div>
        <div className="absolute right-10 bottom-10 w-40 h-40 rounded-full border-4 border-dashed border-yellow-600/20"></div>
        
        {/* Container principal com sombra interna */}
        <div className="relative max-w-7xl mx-auto px-4 py-2">
          {/* Decoração superior */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Lado esquerdo - Slogan com decoração */}
            <div className="mb-6 md:mb-0 text-center md:text-left relative">
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-16 bg-yellow-600 rounded-full hidden md:block"></div>
              <h3 className="text-white text-2xl md:text-3xl font-serif italic drop-shadow-md">
                "Tradição italiana desde 1977"
              </h3>
              <div className="h-1 w-32 bg-white/80 mt-2 mx-auto md:mx-0"></div>
              <p className="text-yellow-200 mt-2 text-sm italic">Sabor que atravessa gerações</p>
            </div>
            
            {/* Centro - Logo ou Emblema com efeito de sombra */}
            <div className="hidden md:block relative">
              <div className="absolute inset-0 w-24 h-24 rounded-full bg-yellow-600 blur-md opacity-70 transform translate-x-1 translate-y-1"></div>
              <div className="relative w-24 h-24 rounded-full bg-white flex items-center justify-center border-4 border-yellow-600 shadow-lg">
                <span className="text-yellow-800 text-3xl font-bold font-serif">77</span>
              </div>
              <div className="absolute -right-2 -top-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                ®
              </div>
            </div>
            
            {/* Lado direito - Call to Action com estilo de cartão */}
            <div className="text-center md:text-right bg-yellow-900/50 p-4 rounded-lg border-l-4 border-yellow-600">
              <p className="text-yellow-200 text-lg mb-1 font-medium">Peça agora pelo telefone</p>
              <p className="text-white text-2xl md:text-3xl font-bold tracking-wider flex items-center justify-center md:justify-end">
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
                (11) 4777-7777
              </p>
              <div className="mt-2 text-xs text-yellow-100 flex items-center justify-center md:justify-end space-x-2">
                <span>Seg-Sex: 18h-23h</span>
                <span className="w-1 h-1 bg-yellow-200 rounded-full"></span>
                <span>Sáb-Dom: 18h-00h</span>
              </div>
            </div>
          </div>
          
          {/* Separador decorativo */}
          <div className="my-6 flex items-center">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent"></div>
            <div className="mx-4 flex space-x-1">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            </div>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent"></div>
          </div>
          
          {/* Ícones de especialidades com efeito hover */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-4 text-center">
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 bg-yellow-700 rounded-full flex items-center justify-center mb-2 shadow-md group-hover:bg-yellow-600 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src="/icons/pizza-icon.svg" alt="Pizza" className="w-7 h-7 text-white relative z-10" onError={(e) => {
                  e.currentTarget.src = "https://img.icons8.com/ios/50/ffffff/pizza.png";
                }} />
              </div>
              <span className="text-white text-xs md:text-sm font-medium group-hover:text-yellow-200 transition-colors duration-300">Pizzas Artesanais</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 bg-yellow-700 rounded-full flex items-center justify-center mb-2 shadow-md group-hover:bg-yellow-600 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src="/icons/oven-icon.svg" alt="Forno" className="w-7 h-7 text-white relative z-10" onError={(e) => {
                  e.currentTarget.src = "https://img.icons8.com/ios/50/ffffff/pizza-oven.png";
                }} />
              </div>
              <span className="text-white text-xs md:text-sm font-medium group-hover:text-yellow-200 transition-colors duration-300">Forno à Lenha</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 bg-yellow-700 rounded-full flex items-center justify-center mb-2 shadow-md group-hover:bg-yellow-600 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src="/icons/wheat-icon.svg" alt="Massa" className="w-7 h-7 text-white relative z-10" onError={(e) => {
                  e.currentTarget.src = "https://img.icons8.com/ios/50/ffffff/wheat.png";
                }} />
              </div>
              <span className="text-white text-xs md:text-sm font-medium group-hover:text-yellow-200 transition-colors duration-300">Massa Fresca</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 bg-yellow-700 rounded-full flex items-center justify-center mb-2 shadow-md group-hover:bg-yellow-600 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src="/icons/delivery-icon.svg" alt="Entrega" className="w-7 h-7 text-white relative z-10" onError={(e) => {
                  e.currentTarget.src = "https://img.icons8.com/ios/50/ffffff/delivery--v1.png";
                }} />
              </div>
              <span className="text-white text-xs md:text-sm font-medium group-hover:text-yellow-200 transition-colors duration-300">Entrega Rápida</span>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 bg-yellow-700 rounded-full flex items-center justify-center mb-2 shadow-md group-hover:bg-yellow-600 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src="/icons/cheese-icon.svg" alt="Queijo" className="w-7 h-7 text-white relative z-10" onError={(e) => {
                  e.currentTarget.src = "https://img.icons8.com/ios/50/ffffff/cheese.png";
                }} />
              </div>
              <span className="text-white text-xs md:text-sm font-medium group-hover:text-yellow-200 transition-colors duration-300">Queijo Premium</span>
            </div>
          </div>
          
          {/* Selo de qualidade */}
          <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full border-2 border-yellow-600/30 flex items-center justify-center transform rotate-12">
            <div className="w-16 h-16 rounded-full bg-yellow-700/70 flex items-center justify-center text-xs text-white font-bold">
              DESDE<br/>1977
            </div>
          </div>
        </div>
        
        {/* Detalhe decorativo inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-900 via-yellow-500 to-yellow-900"></div>
      </div>

      {/* Seção Produtos em Destaque */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-16 bg-gradient-to-b from-white to-yellow-50"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pizza-pattern.png')] opacity-5"></div>
        </div>
        <div className="relative z-10">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-yellow-800 text-lg font-semibold"
            >
              Nossas Especialidades
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl font-bold text-gray-800 mt-2 mb-4"
            >
              Sabores em Destaque
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center gap-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-yellow-800"></span>
              <span className="w-6 h-2 rounded-full bg-yellow-600"></span>
              <span className="w-2 h-2 rounded-full bg-yellow-800"></span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Carrosséis de Produtos */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 px-10 mt-6 mb-16">
        {/* Carrossel: Pizzas Salgadas */}
        <motion.div
          className="relative w-full md:w-1/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -top-6 left-4 z-20 bg-yellow-600 text-white px-4 py-1 rounded-full font-semibold shadow-lg">
            Tradicionais
          </div>
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 5000 }}
            navigation
            loop
            className="w-full h-96 rounded-lg shadow-xl overflow-hidden border-4 border-yellow-100"
          >
            <SwiperSlide>
              <Link to="/cardapio?tipo=1&pizza=1">
                <div className="relative w-full h-full group">
                  <img
                    src="https://i.pinimg.com/736x/c6/51/b7/c651b7690ad8f6365932aabdd8ae9974.jpg"
                    alt="Pizza de Frango com Catupiry"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-0">
                    <span className="bg-yellow-600 text-white text-xs px-2 py-1 rounded-full">Mais Pedida</span>
                    <h3 className="text-2xl font-bold text-white mt-2 drop-shadow-lg">
                      Frango com Catupiry
                    </h3>
                    <div className="flex items-center mt-1 text-yellow-300">
                      <span>★★★★★</span>
                      <span className="text-white text-sm ml-2">(124 avaliações)</span>
                    </div>
                    <p className="text-white mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Deliciosa pizza de frango desfiado, catupiry cremoso e orégano.
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-white font-bold text-xl">R$ 49,90</span>
                      <span className="bg-white text-yellow-700 px-3 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Ver Detalhes →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            
            <SwiperSlide>
              <Link to="/cardapio?tipo=1&pizza=2">
                <div className="relative w-full h-full group">
                  <img
                    src="https://i.pinimg.com/736x/69/4a/2b/694a2bb1fb1d79eab87581ed6f253e4e.jpg"
                    alt="Pizza de Calabresa"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-0">
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">Clássica</span>
                    <h3 className="text-2xl font-bold text-white mt-2 drop-shadow-lg">
                      Calabresa Especial
                    </h3>
                    <div className="flex items-center mt-1 text-yellow-300">
                      <span>★★★★☆</span>
                      <span className="text-white text-sm ml-2">(98 avaliações)</span>
                    </div>
                    <p className="text-white mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Calabresa fatiada, cebola roxa, queijo muçarela e orégano.
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-white font-bold text-xl">R$ 45,90</span>
                      <span className="bg-white text-yellow-700 px-3 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Ver Detalhes →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </motion.div>

        {/* Carrossel: Pizzas Doces */}
        <motion.div
          className="relative w-full md:w-1/3 mt-8 md:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute -top-6 left-4 z-20 bg-pink-500 text-white px-4 py-1 rounded-full font-semibold shadow-lg">
            Doces
          </div>
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 5000 }}
            navigation
            loop
            className="w-full h-96 rounded-lg shadow-xl overflow-hidden border-4 border-yellow-100"
          >
            <SwiperSlide>
              <Link to="/cardapio?tipo=3&pizza=5">
                <div className="relative w-full h-full group">
                  <img
                    src="https://i.pinimg.com/736x/27/e5/24/27e5242a418b1ba7e8d011dbd67f34cb.jpg"
                    alt="Pizza Kinder Bueno"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-0">
                    <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">Premium</span>
                    <h3 className="text-2xl font-bold text-white mt-2 drop-shadow-lg">
                      Kinder Bueno
                    </h3>
                    <div className="flex items-center mt-1 text-yellow-300">
                      <span>★★★★★</span>
                      <span className="text-white text-sm ml-2">(87 avaliações)</span>
                    </div>
                    <p className="text-white mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Chocolate, Kinder Bueno, avelãs e calda de chocolate.
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-white font-bold text-xl">R$ 55,90</span>
                      <span className="bg-white text-pink-500 px-3 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Ver Detalhes →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </motion.div>

        {/* Carrossel: Pizzas Especiais */}
        <motion.div
          className="relative w-full md:w-1/3 mt-8 md:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="absolute -top-6 left-4 z-20 bg-green-600 text-white px-4 py-1 rounded-full font-semibold shadow-lg">
            Especiais
          </div>
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 5000 }}
            navigation
            loop
            className="w-full h-96 rounded-lg shadow-xl overflow-hidden border-4 border-yellow-100"
          >
            <SwiperSlide>
              <Link to="/cardapio?tipo=2&pizza=4">
                <div className="relative w-full h-full group">
                  <img
                    src="https://img.freepik.com/fotos-gratis/close-up-na-deliciosa-pizza_23-2150702817.jpg?t=st=1738446228~exp=1738449828~hmac=17a9efb11abb6e5021ce5ee86d325fc4e7484a7cd1a3451baa34656c201d9a90&w=360"
                    alt="Pizza Vegetariana"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-0">
                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">Vegetariana</span>
                    <h3 className="text-2xl font-bold text-white mt-2 drop-shadow-lg">
                      Vegetariana Especial
                    </h3>
                    <div className="flex items-center mt-1 text-yellow-300">
                      <span>★★★★☆</span>
                      <span className="text-white text-sm ml-2">(56 avaliações)</span>
                    </div>
                    <p className="text-white mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Rúcula, tomate seco, champignon e queijo vegano.
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-white font-bold text-xl">R$ 52,90</span>
                      <span className="bg-white text-green-600 px-3 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Ver Detalhes →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>

      {/* Seção de Avaliações do Google */}
      <div className="bg-amber-100 py-16 mt-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center mb-3">
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                   alt="Google" className="h-8" />
              <span className="ml-2 text-lg font-medium text-gray-600">Reviews</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800">
              O que nossos clientes dizem
            </h2>
            <div className="flex items-center justify-center mt-4">
              <div className="text-yellow-400 text-2xl">★★★★★</div>
              <span className="ml-2 text-gray-700 font-medium">4.8/5</span>
              <span className="ml-2 text-gray-500">(278 avaliações)</span>
            </div>
          </div>

          {/* Carrossel de Avaliações */}
          <div className="max-w-5xl mx-auto">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              speed={1000}
              loop
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 }
              }}
              className="pb-12"
            >
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-md p-6 h-full">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://img.freepik.com/fotos-gratis/retrato-de-homem-feliz_23-2148841981.jpg?w=740"
                      alt="Cliente 1"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-medium text-gray-800">João Silva</p>
                      <p className="text-gray-500 text-sm">Cliente Local • 2 semanas atrás</p>
                    </div>
                  </div>
                  <div className="text-yellow-400 mb-3">★★★★★</div>
                  <p className="text-gray-700">
                    "Melhor pizza que já comi! Massa leve e ingredientes frescos. O atendimento foi excelente e a entrega chegou antes do previsto."
                  </p>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-md p-6 h-full">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://img.freepik.com/fotos-gratis/mulher-jovem-e-elegante-moderna_144627-27866.jpg"
                      alt="Cliente 2"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-medium text-gray-800">Ana Oliveira</p>
                      <p className="text-gray-500 text-sm">Cliente Local • 1 mês atrás</p>
                    </div>
                  </div>
                  <div className="text-yellow-400 mb-3">★★★★★</div>
                  <p className="text-gray-700">
                    "A pizza de chocolate com morango é simplesmente divina! Peço toda semana e nunca me decepciona. O app é super fácil de usar também."
                  </p>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-md p-6 h-full">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg"
                      alt="Cliente 3"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-medium text-gray-800">Carlos Mendes</p>
                      <p className="text-gray-500 text-sm">Guia Local • 3 meses atrás</p>
                    </div>
                  </div>
                  <div className="text-yellow-400 mb-3">★★★★☆</div>
                  <p className="text-gray-700">
                    "Ambiente aconchegante e pizzas deliciosas. A calabresa é especialmente boa. Só acho que o tempo de espera poderia ser menor nos fins de semana."
                  </p>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-md p-6 h-full">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-mulher-bonita-que-esta-posando-e-sorrindo_176420-9798.jpg"
                      alt="Cliente 4"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-medium text-gray-800">Mariana Costa</p>
                      <p className="text-gray-500 text-sm">Cliente Local • 2 dias atrás</p>
                    </div>
                  </div>
                  <div className="text-yellow-400 mb-3">★★★★★</div>
                  <p className="text-gray-700">
                    "Fiz uma festa de aniversário e encomendei várias pizzas. Todos elogiaram muito! O atendimento foi impecável e as pizzas chegaram quentes e no horário combinado."
                  </p>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-md p-6 h-full">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://img.freepik.com/fotos-gratis/homem-de-meia-idade-com-expressao-seria_23-2149871135.jpg"
                      alt="Cliente 5"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-medium text-gray-800">Roberto Almeida</p>
                      <p className="text-gray-500 text-sm">Cliente Local • 1 semana atrás</p>
                    </div>
                  </div>
                  <div className="text-yellow-400 mb-3">★★★★★</div>
                  <p className="text-gray-700">
                    "Sou cliente há mais de 5 anos e a qualidade nunca caiu. A pizza vegetariana especial é meu pedido de sempre. Recomendo muito!"
                  </p>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-md p-6 h-full">
                  <div className="flex items-center mb-4">
                    <img
                      src="https://img.freepik.com/fotos-gratis/mulher-jovem-e-bonita_144627-9810.jpg"
                      alt="Cliente 6"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-medium text-gray-800">Juliana Santos</p>
                      <p className="text-gray-500 text-sm">Cliente Local • 3 semanas atrás</p>
                    </div>
                  </div>
                  <div className="text-yellow-400 mb-3">★★★☆☆</div>
                  <p className="text-gray-700">
                    "As pizzas são muito boas, mas na última vez o delivery demorou mais que o previsto. O gerente entrou em contato depois para se desculpar, o que achei muito profissional."
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
            
            <div className="text-center mt-8">
              <a href="#" className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                Ver todas as avaliações no Google
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Colagem */}
      <div className="relative w-screen pt-[37.5%] shadow-lg rounded-lg overflow-hidden mt-6 mb-0">
        <iframe
          loading="lazy"
          className="absolute top-0 left-0 w-screen h-full border-none"
          src="https://www.canva.com/design/DAGdzrUJPzE/UDfqwNJvAfYvy8HypVZwaA/view?embed"
          allowFullScreen
          allow="fullscreen"
        />
      </div>

      {/* Seção Perguntas Frequentes */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden mb-0 ">
        {/* Elementos decorativos */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-800/5 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-800/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-800/5 rounded-full"></div>
        
        <div className="text-center mb-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="bg-yellow-800 text-white p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-gray-800"
          >
            Ficou com Dúvidas?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mt-4 text-gray-600 max-w-3xl mx-auto px-6"
          >
            Separamos as perguntas mais frequentes entre os clientes. Caso você
            permaneça com dúvidas, entre em contato com a nossa central de
            atendimento pelo app Forneria 77.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto mt-12 space-y-6 px-6 relative z-10">
          <motion.details
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 group hover:border-yellow-800/30 transition-all duration-300"
          >
            <summary className="text-2xl font-semibold cursor-pointer group-open:text-yellow-800 transition-colors duration-300 flex items-center justify-between">
              <div className="flex items-center">
                <span className="bg-yellow-800/10 text-yellow-800 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                Canais de Relacionamento
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="mt-4 text-gray-600 space-y-2 pl-14">
              <p>Sou Cliente: Para entrar em contato com a gente, você pode acessar:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Forneria77App: nossa central de Ajuda dentro do aplicativo</li>
                <li>77Food: nossa central de Ajuda dentro do aplicativo</li>
                <li>Ouvidoria Forneria 77 – <a href="#" className="text-yellow-800 hover:underline">Clique aqui</a></li>
              </ul>
            </div>
          </motion.details>

          <motion.details
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 group hover:border-yellow-800/30 transition-all duration-300"
          >
            <summary className="text-2xl font-semibold cursor-pointer group-open:text-yellow-800 transition-colors duration-300 flex items-center justify-between">
              <div className="flex items-center">
                <span className="bg-yellow-800/10 text-yellow-800 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Meu Pedido não Chegou
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-4 text-gray-600 pl-14">
              Não se preocupe, você pode entrar em contato com a loja pelo próprio aplicativo...
            </p>
          </motion.details>

          <motion.details
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 group hover:border-yellow-800/30 transition-all duration-300"
          >
            <summary className="text-2xl font-semibold cursor-pointer group-open:text-yellow-800 transition-colors duration-300 flex items-center justify-between">
              <div className="flex items-center">
                <span className="bg-yellow-800/10 text-yellow-800 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                Não quero mais o Pedido
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-4 text-gray-600 pl-14">
              Caso o pedido tenha mais de 5 minutos, vai aparecer a opção "Clique para contato com nosso atendimento".
            </p>
          </motion.details>
        </div>
        
        {/* Botão de contato adicional */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-yellow-800 text-white rounded-full font-medium hover:bg-yellow-900 transition-colors shadow-lg hover:shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Fale com um Atendente
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
