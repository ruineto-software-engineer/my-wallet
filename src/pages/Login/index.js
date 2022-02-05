import { Fragment, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import requests from "../../services/requests";
import Logo from "../../assets/img/logo.svg";
import { Button, Container, Form, Input, Hyperlink } from "../../components/Form";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from  'react-loader-spinner';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth") !== null) {
      navigate("/balance");
    }
  }, [navigate]);

  function handleSubmit(e) {
    e.preventDefault();

    setIsloading(true);
    const promise = requests.signIn({
      email,
      password
    });
    setTimeout(() => {
      promise.then((response) => {
        setIsloading(false);

        login(response.data);
        navigate("/balance");
      });
    }, 3000);
    setTimeout(() => {
      promise.catch(() => {
        setIsloading(false);

        alert(`Não foi possível efetuar o login. Ocorreu um erro inesperado, tente novamente mais tarde!`);
      });
    }, 3000);
  }

  return(
    <Fragment>
      <Container>
        <img alt="logo.svg" src={Logo}/>

        <Form onSubmit={handleSubmit}>
          <Input 
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            stageloading={isLoading}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            stageloading={isLoading}
            required
          />

          <Button type="submit" stageloading={isLoading}>
            {isLoading ?
              <ThreeDots color="#FFFFFF" height={50} width={50} />
            :
              "Entrar"
            }
          </Button>
        </Form>

        <Hyperlink to="/register" stageloading={isLoading ? 1 : undefined}>
          Primeira vez? Cadastre-se!
        </Hyperlink>
      </Container>
    </Fragment>
  );
}