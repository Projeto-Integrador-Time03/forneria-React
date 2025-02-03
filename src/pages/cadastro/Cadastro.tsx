import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import { RotatingLines } from 'react-loader-spinner';

function Cadastro() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate('/login');
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        alert('Usuário cadastrado com sucesso!');
      } catch (error) {
        alert('Erro ao cadastrar o usuário!');
      }
    } else {
      alert('Dados do usuário inconsistentes! Verifique as informações do cadastro.');
      setUsuario({ ...usuario, senha: '' });
      setConfirmaSenha('');
    }

    setIsLoading(false);
  }

  return (
    <div className="min-h-screen bg-stone-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulário de Cadastro */}
        <form
          className="bg-white p-8 rounded-lg shadow-2xl transform transition-all hover:scale-105"
          onSubmit={cadastrarNovoUsuario}
        >
          <h2 className="text-5xl font-bold text-center mb-8 text-black">Cadastrar</h2>

          <div className="mb-6">
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={usuario.nome}
              onChange={atualizarEstado}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="usuario" className="block text-sm font-medium text-gray-700">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuário"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={usuario.usuario}
              onChange={atualizarEstado}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="foto" className="block text-sm font-medium text-gray-700">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={usuario.foto}
              onChange={atualizarEstado}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={usuario.senha}
              onChange={atualizarEstado}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmarSenha" className="block text-sm font-medium text-gray-700">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={confirmaSenha}
              onChange={handleConfirmarSenha}
            />
          </div>

          <div className="flex justify-around w-full gap-4">
            <button
              type="button"
              className="w-1/2 py-3 bg-yellow-900 text-white font-semibold rounded-md hover:bg-black transition-colors"
              onClick={retornar}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="w-1/2 py-3 bg-black text-white font-semibold rounded-md hover:bg-yellow-900 transition-colors flex justify-center items-center"
            >
              {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                <span>Cadastrar</span>
              )}
            </button>
          </div>
        </form>

        {/* Imagem de Fundo (opcional) */}
        <div className="hidden lg:flex items-center justify-center bg-gradient-to-r from-indigo-900 to-black rounded-lg shadow-2xl">
          <div className="text-white text-center p-8">
            <h3 className="text-4xl font-bold mb-4">Crie sua conta!</h3>
            <p className="text-lg">Junte-se a nós e comece a explorar um mundo de possibilidades.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;