import "./index.css";
import React, { useState } from "react";
import Swal from "sweetalert2";
import usuarioService from "../../services/usuario-service";

function Login() {

    const [email, setEmail] = useState("admin@admin.com");
    const [senha, setSenha] = useState("123456");

    


    const autenticar = () => {

        if (!email || !senha) {
            Swal.fire({
                icon: 'error',
                text: "Os campos de e-mail e senha são obrigatórios, verifique!"
            });
        }

        
        usuarioService
            .autenticar(email, senha)
            .then(response => {
                usuarioService.salvarToken(response.data.token);
                usuarioService.salvarUsuario(response.data.usuario);
                window.location = "/produto";
                


            })
            .catch(erro => {
                
            });
    };

    return (
        <section id="login">
            <form>

                <h1>Login</h1>

                <div className="grupo">
                    <input id="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label for="Email">E-mail:</label> <br />
                </div>

                <div className="grupo">
                    <input id="senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                    <label for="senha"> Senha:</label> <br />
                </div>

                <div className="esqueci-minha-senha">
                    <a href="#">Esqueci minha senha</a>
                </div>

                <button id="btn-login" type="submit" onClick={autenticar}>Sign in</button>

            </form>
        </section>
    );
}

export default Login; 