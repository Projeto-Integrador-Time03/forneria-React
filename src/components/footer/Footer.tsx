import {
    FacebookLogo,
    LinkedinLogo,
    InstagramLogo,
  } from "@phosphor-icons/react";
import { Logo } from "../logo/Logo";
  
  function Footer() {
    let data = new Date().getFullYear();
  
    return (
      <>
      <section className="w-screen">

        {/*Footer Maior*/}
        <div className="flex justify-center bg-[#222222] text-white hover:text-yellow-800 font-bold py-60">
          <div className="container flex flex-col items-center py-4">
            
          <Logo /> 
           
          </div>
        </div>

        {/*Footer Menor*/}
        <div className="bg-[#1E1E1E] py-25">
         <div className="flex justify-center text-white hover:text-yellow-800 font-bold">
          <div className="container flex flex-col items-center">
            <p className="text-xl font-bold">Forneria 77 | Copyright: {data}</p>
            <p className="text-lg">Acesse nossas redes sociais.</p>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/school/generationbrasil"
                target="_blank"
              >
                <LinkedinLogo size={48} weight="bold" />
              </a>
              <a
                href="https://www.instagram.com/generationbrasil"
                target="_blank"
              >
                <InstagramLogo size={48} weight="bold" />
              </a>
              <a href="https://www.facebook.com/generationbrasil" target="_blank">
                <FacebookLogo size={48} weight="bold" />
              </a>
            </div>
          </div>
         </div>
        </div>

      </section>
      </>
    );
  }
  
  export default Footer;
  