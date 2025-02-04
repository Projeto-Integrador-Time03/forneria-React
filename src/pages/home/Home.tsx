import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Importe o CSS do Swiper

function Home() {
  return (
    <div className="w-screen bg-white mb-20">
      {/* Seção principal com imagem de fundo */}
      <div
        className="w-screen h-[750px] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage: "url('https://i.imgur.com/F6nRA6V.jpeg')",
        }}
      >
        {/* Título principal */}
        <h2 className="font-quicksand text-5xl font-bold drop-shadow-lg transition-transform transform hover:scale-105 animate-pulse">
          Seja Bem-Vindo à Forneria 77!
        </h2>
        <p className="text-lg mt-2 drop-shadow-md">
          Sabor sem regras, do clássico ao saudável. Clique no botão abaixo para
          começar.
        </p>
        <Link to={`/cardapio`}>
          <button className="mt-4 bg-black hover:bg-yellow-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 transition-transform transform hover:scale-105">
            Começar
          </button>
        </Link>
      </div>

      {/* Seção "Por que nos escolher?" */}
      <div id="sobre-nos" className="text-center mt-10 transition duration-300">
        <h3 className="text-4xl font-bold mb-6 border-b-4 border-yellow-800 inline-block pb-2 text-gray-800">
          Por que nos escolher?
        </h3>
      </div>

      {/* Sobre Nós */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-10 md-10">
        {/* Texto à Esquerda */}
        <div className="pl-10">
          <p className="text-gray-900 text-xl " style={{ marginTop: '-100px' }}>
            Na Forneria 77, reinventamos a forma de saborear pizza, acreditamos
            que todo mundo merece saborear uma boa pizza do jeito que mais
            gosta! Seja você fã do fast food tradicional ou alguém que busca uma
            alimentação mais equilibrada, temos opções para todos os gostos.
            <br />
            <br />
            Para quem ama o sabor clássico e irresistível da pizza, oferecemos
            receitas tradicionais com ingredientes selecionados, massas macias e
            recheios generosos, garantindo aquela experiência deliciosa que todo
            amante de pizza espera.
            <br />
            <br />
            Mas também acreditamos que uma alimentação equilibrada não precisa
            abrir mão do prazer, por isso criamos um cardápio pensado para quem
            busca opções rápidas, nutritivas e deliciosas. Utilizamos
            ingredientes frescos, orgânicos e de alta qualidade, garantindo que
            cada pizza seja leve, saudável e cheia de sabor.
            <br />
            <br />
            Venha provar e descubra uma nova forma de comer bem!
          </p>
        </div>

        {/* Imagens com Carrossel e Efeito Cascata */}
        <div className="relative flex flex-col gap-4">
          {/* Primeira Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8 }}
            className="w-96 h-96 rounded-lg shadow-lg ml-auto overflow-hidden"
          >
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2100 }}
              speed={1000}
              loop
            >
              <SwiperSlide>
                <img
                  src="https://i.pinimg.com/736x/33/b3/a6/33b3a636d41b202d1db0092841f57d7d.jpg"
                  alt="Pizza 1"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://img.freepik.com/fotos-gratis/queijo-georgiano-khachapuri-imeruli-comida-tradicional-da-georgia-khachapuri-quente_114579-140.jpg?w=360"
                  alt="Pizza 2"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </motion.div>

          {/* Segunda Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-96 h-96 rounded-lg shadow-lg overflow-hidden"
            style={{ marginTop: '-150px', marginLeft: '30px' }}
          >
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2100 }}
              speed={1000}
              loop
            >
              <SwiperSlide>
                <img
                  src="https://i.pinimg.com/736x/7c/18/b2/7c18b221d22d6ea6887d6583149b9d7b.jpg"
                  alt="Restaurante 1"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.pinimg.com/736x/27/e5/24/27e5242a418b1ba7e8d011dbd67f34cb.jpg"
                  alt="Restaurante 2"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </div>
      </div>

      {/* Faixa */}
      <div className="w-screen bg-yellow-800 text-white mt-0 py-4 flex items-center px-6 md:px-20 mt-12"></div>

      {/* Seção Produtos em Destaque */}
      <div className="text-center mt-10">
        <h2 className="text-4xl font-bold text-gray-800">
          Produtos em Destaque
        </h2>
        <p className="text-lg mt-2 text-gray-600 max-w-2xl mx-auto">
          Confira nossas pizzas mais populares, salgadas, doces e saudáveis.
          Clique em uma imagem para ver mais detalhes.
        </p>
      </div>

      {/* Carrosséis de Produtos */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 px-10 mt-6">
        {/* Carrossel 1: Pizzas Salgadas */}
        <motion.div
          className="relative w-full md:w-1/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 5000 }}
            navigation
            loop
            className="w-full h-96 rounded-lg shadow-lg overflow-hidden"
          >
            <SwiperSlide>
              <Link to="/pizza-salga-1">
                <div className="relative w-full h-full">
                  <img
                    src="https://i.pinimg.com/736x/c6/51/b7/c651b7690ad8f6365932aabdd8ae9974.jpg"
                    alt="Pizza de Frango com Catupiry"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-yellow-800 bg-opacity-50 text-white p-4 transition-all duration-300 hover:bg-opacity-70">
                    <h3 className="text-xl font-bold">
                      Pizza de Frango com Catupiry
                    </h3>
                    <p className="text-lg mt-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      Deliciosa pizza de frango, catupiry e borda vulcão de catupiry.
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/pizza-salga-2">
                <div className="relative w-full h-full">
                  <img
                    src="https://i.pinimg.com/736x/69/4a/2b/694a2bb1fb1d79eab87581ed6f253e4e.jpg"
                    alt="Pizza de Bacon com Cheddar"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-yellow-800 bg-opacity-50 text-white p-4 transition-all duration-300 hover:bg-opacity-70">
                    <h3 className="text-xl font-bold">
                      Pizza de Bacon com Cheddar
                    </h3>
                    <p className="text-lg mt-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      Pizza com bacon, muito cheddar e borda enrolada no
                      cheddar.
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/pizza-salga-3">
                <div className="relative w-full h-full">
                  <img
                    src="https://i.pinimg.com/736x/2d/4b/0b/2d4b0b41bcb652fb584355dfb509aeb6.jpg"
                    alt="Pizza de Calabresa"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-yellow-800 bg-opacity-50 text-white p-4 transition-all duration-300 hover:bg-opacity-70">
                    <h3 className="text-xl font-bold">Pizza de Calabresa</h3>
                    <p className="text-lg mt-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      Pizza de calabresa com muito queijo.
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </motion.div>

        {/* Carrossel 2: Pizzas Doces */}
        <motion.div
          className="relative w-full md:w-1/3 mt-8 md:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 5000 }}
            navigation
            loop
            className="w-full h-96 rounded-lg shadow-lg overflow-hidden"
          >
            <SwiperSlide>
              <Link to="/pizza-doce-1">
                <div className="relative w-full h-full">
                  <img
                    src="https://i.pinimg.com/736x/27/e5/24/27e5242a418b1ba7e8d011dbd67f34cb.jpg"
                    alt="Pizza Kinder Bueno e Ferrero Rocher"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-yellow-800 bg-opacity-50 text-white p-4 transition-all duration-300 hover:bg-opacity-70">
                    <h3 className="text-xl font-bold">
                      Pizza Kinder Bueno e Ferrero Rocher
                    </h3>
                    <p className="text-lg mt-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      Pizza de chocolate com Kinder Bueno e Ferrero Rocher.
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/pizza-doce-2">
                <div className="relative w-full h-full">
                  <img
                    src="https://i.pinimg.com/736x/60/29/28/6029281b4336df95c7e110bca63eff43.jpg"
                    alt="Pizza de Marshmallow"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-yellow-800 bg-opacity-50 text-white p-4 transition-all duration-300 hover:bg-opacity-70">
                    <h3 className="text-xl font-bold">Pizza de Marshmallow</h3>
                    <p className="text-lg mt-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      Pizza de Marshmallow com chocolate.
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/pizza-doce-3">
                <div className="relative w-full h-full">
                  <img
                    src="https://i.pinimg.com/736x/12/53/53/125353b54118ff31a88bb93bce48e6e0.jpg"
                    alt="Pizza de Morango com Chocolate"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-yellow-800 bg-opacity-50 text-white p-4 transition-all duration-300 hover:bg-opacity-70">
                    <h3 className="text-xl font-bold">
                      Pizza de Morango com Chocolate
                    </h3>
                    <p className="text-lg mt-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      Pizza de Morango com Chocolate Branco e Nutella.
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </motion.div>

        {/* Carrossel 3: Pizzas Saudáveis */}
        <motion.div
          className="relative w-full md:w-1/3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 5000 }}
            navigation
            loop
            className="w-full h-96 rounded-lg shadow-lg overflow-hidden"
          >
            <SwiperSlide>
              <Link to="/pizza-saudavel-1">
                <div className="relative w-full h-full">
                  <img
                    src="https://img.freepik.com/fotos-gratis/close-up-na-deliciosa-pizza_23-2150702817.jpg?t=st=1738446228~exp=1738449828~hmac=17a9efb11abb6e5021ce5ee86d325fc4e7484a7cd1a3451baa34656c201d9a90&w=360"
                    alt="Pizza Saudável 1"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-yellow-800 bg-opacity-50 text-white p-4 transition-all duration-300 hover:bg-opacity-70">
                    <h3 className="text-xl font-bold">Pizza de Couve-Flor</h3>
                    <p className="text-lg mt-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    Pizza de Couve-Flor com queijo de cabra.
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/pizza-saudavel-2">
                <div className="relative w-full h-full">
                  <img
                    src="https://img.freepik.com/fotos-gratis/close-up-em-uma-deliciosa-pizza_23-2150852087.jpg?t=st=1738446087~exp=1738449687~hmac=4785c59e9a8a1074e96bc1c243d201129ac2cb86a0ac3d14deb87f4a81711a8b&w=360"
                    alt="Pizza Saudável 2"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-yellow-800 bg-opacity-50 text-white p-4 transition-all duration-300 hover:bg-opacity-70">
                    <h3 className="text-xl font-bold">Pizza de Frango com Espinafre</h3>
                    <p className="text-lg mt-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    Pizza de Frango com Espinafre ao molho branco.
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/pizza-saudavel-3">
                <div className="relative w-full h-full">
                  <img
                    src="https://i.pinimg.com/736x/05/d3/5b/05d35bc9ab4dafd9f46c4c6b7471d492.jpg"
                    alt="Pizza Saudável 3"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-yellow-800 bg-opacity-50 text-white p-4 transition-all duration-300 hover:bg-opacity-70">
                    <h3 className="text-xl font-bold">Pizza de Legumes</h3>
                    <p className="text-lg mt-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      Pizza com legumes frescos brazeados com queijo de castanha.
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>

      {/* Seção de Avaliações */}
      <div className="text-center mt-10">
        <h3 className="text-sm text-gray-500">Avaliações Google</h3>
        <h2 className="text-4xl font-bold text-gray-800">
          Avaliações dos Clientes
        </h2>
      </div>

      {/* Carrossel de Avaliações */}
      <div className="flex justify-center mt-6 mb-13">
        <div className="w-[80%] min-h-[240px] overflow-hidden rounded-lg shadow-lg">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            speed={1000}
            loop
            className="w-full h-full"
          >
            <SwiperSlide className="flex items-center p-6 bg-gray-100">
              <img
                src="https://img.freepik.com/fotos-gratis/retrato-de-homem-feliz_23-2148841981.jpg?w=740"
                alt="Cliente 1"
                className="w-24 h-24 rounded-full mr-6"
              />
              <div>
                <p className="text-gray-800 text-lg">
                  "Melhor pizza que já comi! Massa leve e ingredientes frescos."
                </p>
                <p className="text-yellow-500 mt-2">★★★★★</p>
                <p className="text-gray-600">- João Silva</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center p-6 bg-gray-100">
              <img
                src="https://img.freepik.com/fotos-gratis/retrato-de-mulher-sorrindo_23-2148297036.jpg?w=740"
                alt="Cliente 2"
                className="w-24 h-24 rounded-full mr-6"
              />
              <div>
                <p className="text-gray-800 text-lg">
                  "Atendimento excelente e entrega super rápida!"
                </p>
                <p className="text-yellow-500 mt-2">★★★★★</p>
                <p className="text-gray-600">- Maria Oliveira</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center p-6 bg-gray-100">
              <img
                src="https://img.freepik.com/fotos-gratis/jovem-homem-de-oculos-e-sorrindo_23-2148978211.jpg?w=740"
                alt="Cliente 3"
                className="w-24 h-24 rounded-full mr-6"
              />
              <div>
                <p className="text-gray-800 text-lg">
                  "Sabores incríveis e opções saudáveis que surpreenderam!"
                </p>
                <p className="text-yellow-500 mt-2">★★★★★</p>
                <p className="text-gray-600">- Pedro Santos</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Colagem */}
      <div className="relative w-screen pt-[37.5%] shadow-lg rounded-lg overflow-hidden mt-6">
        <iframe
          loading="lazy"
          className="absolute top-0 left-0 w-screen h-full border-none"
          src="https://www.canva.com/design/DAGdzrUJPzE/UDfqwNJvAfYvy8HypVZwaA/view?embed"
          allowFullScreen
          allow="fullscreen"
        />
      </div>

      {/* Seção Perguntas Frequentes */}
      <div className="text-center mt-10">
        <h2 className="text-4xl font-bold text-gray-800">Ficou com Dúvidas?</h2>
        <p className="text-lg mt-2 text-gray-600 max-w-2xl mx-auto">
          Separamos as perguntas mais frequentes entre os clientes. Caso você
          permaneça com dúvidas, entre em contato com a nossa central de
          atendimento pelo app Ilustre Forneria 77.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-6 space-y-4">
        <details className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
          <summary className="text-xl font-semibold cursor-pointer">
            Canais de Relacionamento
          </summary>
          <p className="text-gray-600 mt-2">
            Sou Cliente: Para entrar em contato com a gente, você pode acessar:
            <br /> IlustreForneria77App: nossa central de Ajuda dentro do
            aplicativo.
            <br /> 77Food: nossa central de Ajuda dentro do aplicativo.
            <br /> Ouvidoria Ilustre Forneria 77 – Clique aqui.
          </p>
        </details>
        <details className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
          <summary className="text-xl font-semibold cursor-pointer">
            Meu Pedido não Chegou
          </summary>
          <p className="text-gray-600 mt-2">
            Não se preocupe, você pode entrar em contato com a loja pelo próprio
            aplicativo...
          </p>
        </details>
        <details className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
          <summary className="text-xl font-semibold cursor-pointer">
            Não quero mais o Pedido
          </summary>
          <p className="text-gray-600 mt-2">
            Caso o pedido tenha mais de 5 minutos, vai aparecer a opção "Clique
            para contato com nosso atendimento".
          </p>
        </details>
      </div>
    </div>
  );
}

export default Home;
