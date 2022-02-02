/* import axios from "axios"; */
import { Fragment, useState } from "react";
import Logo from "../../assets/img/logo.svg";
import { Button, Container, Form, Input, Hyperlink } from "../../components/Form";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

          <Button type="submit">
            Entrar
          </Button>
        </Form>

        <Hyperlink to="/register">
          Primeira vez? Cadastre-se!
        </Hyperlink>
      </Container>
    </Fragment>
  );
}