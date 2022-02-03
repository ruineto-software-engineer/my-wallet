import axios from "axios";
import { Fragment, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/img/logo.svg";
import { Button, Container, Form, Input, Hyperlink } from "../../components/Form";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from  'react-loader-spinner';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsloading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setIsloading(true);
    const promise = axios.post('http://localhost:5000/sign-in', {
      email,
      password
    });
    setTimeout(() => {
      promise.then((response) => {
        setIsloading(false);

        console.log("token: ", response.data);
        navigate("/balance");
      });
    }, 3000);
    setTimeout(() => {
      promise.catch((error) => {
        setIsloading(false);

        console.log(error);
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