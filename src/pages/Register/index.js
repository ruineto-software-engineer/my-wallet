import { Fragment, useState } from "react";
import { useNavigate } from 'react-router-dom';
import requests from "../../services/requests";
import Logo from "../../assets/img/logo.svg";
import { Button, Container, Content, Form, Input, Hyperlink } from "../../components/Form";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from  'react-loader-spinner';

export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsloading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if(password !== confirmPassword){
      alert("As senhas não são compatíveis, reveja os campos de senha!");
      return;
    }

    setIsloading(true);
    const promise = requests.signUp({
      name,
      email,
      password
    })
    setTimeout(() => {
      promise.then(() => {
        setIsloading(false);
        
        navigate("/");
      });
    }, 3000);
    setTimeout(() => {
      promise.catch((error) => {
        setIsloading(false);

        if(error.response.status === 409){
          alert(`Não foi possível efetuar o cadastro. Nome ou e-mail já em uso, tente novamente!`);
        }else{
          alert(`Não foi possível efetuar o cadastro. Ocorreu algum erro inesperado, tente novamente mais tarde!`);
        }
      });
    }, 3000);
  }

  return(
    <Fragment>
      <Container>
        <Content>
          <img alt="logo.svg" src={Logo}/>

          <Form onSubmit={handleSubmit}>
            <Input 
              type="text"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
              stageloading={isLoading}
              required
            />
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
            <Input
              type="password"
              placeholder="Confirme a senha"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              stageloading={isLoading}
              required
            />

            <Button type="submit" stageloading={isLoading}>
              {isLoading ?
                <ThreeDots color="#FFFFFF" height={50} width={50} />
              :
                "Cadastrar"
              }
            </Button>
          </Form>

          <Hyperlink to="/" stageloading={isLoading ? 1 : undefined}>
            Já tem uma conta? Entre agora!
          </Hyperlink>
        </Content>
      </Container>
    </Fragment>
  );
}