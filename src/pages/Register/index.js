import { Fragment, useState } from "react";
import { useNavigate } from 'react-router-dom';
import requests from "../../services/requests";
import Logo from "../../assets/img/logo.svg";
import { Button, Container, Content, Form, Input, Hyperlink } from "../../components/Form";
import Swal from 'sweetalert2';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from  'react-loader-spinner';

export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  function handleSubmit(e) {
    e.preventDefault();

    if(password !== confirmPassword){
      Toast.fire({
        icon: 'error',
        text: 'As senhas não são compatíveis, reveja os campos de senha!',
      })
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

        Toast.fire({
          icon: 'success',
          title: 'Cadastro realizado com sucesso'
        })
        navigate("/");
      });
    }, 3000);
    setTimeout(() => {
      promise.catch((error) => {
        setIsloading(false);

        if(error.response.status === 409){
          Toast.fire({
            icon: 'error',
            text: 'Não foi possível efetuar o cadastro. Nome ou e-mail já em uso, tente novamente!'
          })
        }else{
          Toast.fire({
            icon: 'error',
            text: 'Não foi possível efetuar o cadastro. Ocorreu algum erro inesperado, tente novamente mais tarde!'
          })
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