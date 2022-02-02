/* import axios from "axios"; */
import { Fragment, useState } from "react";
import Logo from "../../assets/img/logo.svg";
import { Button, Container, Form, Input, Hyperlink } from "../../components/Form";

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleLogin(e) {
    e.preventDefault();

    /* 
    const promise = axios.post('http://localhost:5000/sign-up', {
      email,
      password
    }); 
    */
  }

  return(
    <Fragment>
      <Container>
        <img alt="logo.svg" src={Logo}/>

        <Form onSubmit={handleLogin}>
          <Input 
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <Input 
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <Input
            type="password"
            placeholder="Confirme a senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required
          />

          <Button type="submit">
            Cadastrar
          </Button>
        </Form>

        <Hyperlink to="/">
          Já tem uma conta? Entre agora!
        </Hyperlink>
      </Container>
    </Fragment>
  );
}