import { useContext, useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Tipo from "../../../models/Tipo";
import CardTipos from "../cardtipos/CardTipos";
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaTipos() {

    const navigate = useNavigate();

    const [tipos, setTipos] = useState<Tipo[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarTipos() {
        try {
            await buscar('/tipos', setTipos, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta("Você precisa estar logado!", "info")
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarTipos()
    }, [tipos.length])

    return (
      <div 
          className="min-h-screen bg-cover bg-center bg-fixed"
          style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
              backgroundBlendMode: "overlay",
          }}
      >
          {tipos.length === 0 && (
              <div className="flex justify-center items-center pt-20">
                  <TailSpin
                      visible={true}
                      height={80}
                      width={80}
                      color="#000000"
                      ariaLabel="tail-spin-loading"
                      wrapperClass="mx-auto"
                  />
              </div>
          )}
          <div className="flex justify-center w-full py-8">
              <div className="container flex flex-col px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {tipos.map((tipo) => (
                          <CardTipos key={tipo.id} tipo={tipo} />
                      ))}
                  </div>
              </div>
          </div>
      </div>
  );
}

export default ListaTipos;