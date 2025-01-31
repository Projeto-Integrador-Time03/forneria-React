import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full p-0 bg-white">
      {/* Imagem de destaque */}
      <img
        src='https://img.freepik.com/free-photo/baking-delicious-pizza-with-wood-fired-oven_23-2150134250.jpg?t=st=1738351913~exp=1738355513~hmac=6636a7301921a446ee49621d9c3d65a7a9a5275f70d1ef0638e0a4eb1bb3f124&w=996'
        alt="Imagem da Página Home"
        className="w-screen h-170 object-cover shadow-lg"
      />

      {/* Título principal */}
      <div className="text-center my-6">
        <h2 className="font-quicksand text-5xl font-bold text-gray-800">
          Seja Bem-Vindo à Forneria 77!
        </h2>
        <p className="text-lg mt-2 text-gray-600">
          Sabor sem regras, do clássico ao saudável. Clique no botão abaixo para
          começar.
        </p>
        <Link to={`/cardapio`}>
          <button className="mt-4 bg-black hover:bg-yellow-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300">
            Começar
          </button>
        </Link>
      </div>

      {/* Seção "Por que nos escolher?" */}
      <div className="text-center mt-10">
        <h3 className="text-4xl font-bold mb-6 border-b-4 border-yellow-800 inline-block pb-2 text-gray-800">
          Por que nos escolher?
        </h3>
      </div>

   {/* Sobre Nós */}
<div className="grid grid-cols-2 gap-8 items-center px-10">
  {/* Texto à Esquerda */}
  <div className="pl-10"> {/* Adiciona espaçamento à esquerda */}
    <p className="text-gray-600 text-lg">
      Na Forneria 77, reinventamos a forma de saborear pizza, acreditamos que todo mundo merece saborear uma boa pizza do jeito que mais gosta!  
      Seja você fã do fast food tradicional ou alguém que busca uma alimentação mais equilibrada, temos opções para todos os gostos.  
      Para quem ama o sabor clássico e irresistível da pizza, oferecemos receitas tradicionais com ingredientes selecionados, massas macias e recheios generosos, garantindo aquela experiência deliciosa que todo amante de pizza espera.  
      Mas também acreditamos que uma alimentação equilibrada não precisa abrir mão do prazer, por isso criamos um cardápio pensado para quem busca opções rápidas, nutritivas e deliciosas.  
      Utilizamos ingredientes frescos, orgânicos e de alta qualidade, garantindo que cada pizza seja leve, saudável e cheia de sabor.  
      Temos massas preparadas com grãos integrais e oferecemos versões sem glúten, sem lactose e veganas, para atender a diferentes estilos de vida e necessidades alimentares.  
      Seja para uma refeição rápida ou um momento especial, estamos aqui para oferecer o melhor da pizza fast food com um toque saudável.  
      <br /><br />
      Venha provar e descubra uma nova forma de comer bem!
    </p>
  </div>

  {/* Imagens à Direita */}
  <div className="relative flex flex-col gap-4">
    <img
      src="https://source.unsplash.com/300x300/?pizza"
      alt="Pizza 1"
      className="w-72 h-72 rounded-lg shadow-lg ml-auto"
    />
    <img
      src="https://source.unsplash.com/300x300/?restaurant"
      alt="Pizza 2"
      className="w-72 h-72 rounded-lg shadow-lg ml-auto mt-6"
    />
  </div>
</div>


      {/* Seção Segurança */}
      <div className="w-full bg-stone-800 text-white mt-10 py-10 flex items-center px-6 md:px-20">
        
      </div>

      {/* Seção Perguntas Frequentes */}
      <div className="text-center mt-10">
        <h2 className="text-4xl font-bold text-gray-800">Ficou com dúvidas?</h2>
        <p className="text-lg mt-2 text-gray-600 max-w-2xl mx-auto">
          Separamos as perguntas mais frequentes entre os passageiros. Caso você
          permaneça com dúvidas, entre em contato com a nossa central de
          atendimento pelo app Disk Carona.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-6 space-y-4">
        <details className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
          <summary className="text-xl font-semibold cursor-pointer">
            Canais de relacionamento
          </summary>
          <p className="text-gray-600 mt-2">
            Sou Passageiro Para entrar em contato com a gente, você pode
            acessar:
            <br /> DiskCaronaApp: nossa central de Ajuda dentro do aplicativo.
            <br /> DiskFood: nossa central de Ajuda dentro do aplicativo.
            <br /> Ouvidoria Disk Carona – Clique aqui.
          </p>
        </details>
        <details className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
          <summary className="text-xl font-semibold cursor-pointer">
            Eu esqueci um item no carro
          </summary>
          <p className="text-gray-600 mt-2">
            Não se preocupe, você consegue entrar em contato com o motorista até
            72 horas depois da corrida pelo próprio aplicativo...
          </p>
        </details>
        <details className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
          <summary className="text-xl font-semibold cursor-pointer">
            Não quero mais fazer corridas com o motorista da minha viagem
          </summary>
          <p className="text-gray-600 mt-2">
            Caso a corrida tenha mais de 72 horas, vai aparecer a opção "Clique
            para contato com nosso atendimento".
          </p>
        </details>
      </div>
    </div>
  );
}

export default Home;
