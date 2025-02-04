import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';
import pizza2 from '../../assets/pizza2.jpg';

function Login() {
    const navigate = useNavigate();
    const { usuario, handleLogin, isLoading } = useContext(AuthContext);
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home');
        }
    }, [usuario]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        });
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(usuarioLogin);
    }

    return (
        <div 
            className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
            style={{ backgroundImage: `url(${pizza2})` }}
        >
            <div className="w-full max-w-md mx-auto">
                <form 
                    className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-2xl transform transition-all hover:scale-105"
                    onSubmit={login}
                >
                    <h2 className="text-4xl font-bold text-center mb-8 text-black">Entrar</h2>
                    
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="usuario" className="block text-sm font-medium text-gray-700 mb-1">
                                Usuário
                            </label>
                            <input
                                type="text"
                                id="usuario"
                                name="usuario"
                                placeholder="Usuário"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                value={usuarioLogin.usuario}
                                onChange={atualizarEstado}
                            />
                        </div>

                        <div>
                            <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">
                                Senha
                            </label>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                placeholder="Senha"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                value={usuarioLogin.senha}
                                onChange={atualizarEstado}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center items-center py-3 bg-stone-800 text-white font-semibold rounded-md hover:bg-stone-900 transition-colors duration-300"
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
                                <span>Entrar</span>
                            )}
                        </button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">ou</span>
                            </div>
                        </div>

                        <p className="text-center text-gray-600">
                            Ainda não tem uma conta?{' '}
                            <Link to="/cadastro" className="text-yellow-800 hover:underline font-medium">
                                Cadastre-se
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;