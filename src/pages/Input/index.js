import { Fragment, useState } from "react";
import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import requests from "../../services/requests";
import dayjs from 'dayjs';
import { Container, Content, Title, Header } from "../../components/Movements";
import { Button, Form, Input as InputForm } from "../../components/Form";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from  'react-loader-spinner';

export default function Input() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsloading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    let inputData;
    if(value[0] === ","){
      let secondValue = "0" + value;
      inputData = {
        value: secondValue,
        description,
        date: dayjs().format('DD/MM'),
        isInput: true,
      }
    }else{
      inputData = {
        value,
        description,
        date: dayjs().format('DD/MM'),
        isInput: true,
      }
    }

    setIsloading(true);
    const promise = requests.postInput(inputData, auth.token);
    setTimeout(() => {
      promise.then(() => {
        setIsloading(false);
        
        navigate("/balance");
      });
    }, 2000);
    setTimeout(() => {
      promise.catch((error) => {
        setIsloading(false);

        alert(`Não foi possível efetuar o cadastro da entrada. Ocorreu um erro inesperado, tente novamente mais tarde!`);
      });
    }, 2000);
  }

  function handleCurrency(e) {
    let inputValue = e.target.value;

    if(inputValue === ""){
      setValue(0);
      return;
    }
    
    inputValue = inputValue + '';
    inputValue = parseInt(inputValue.replace(/[\D]+/g,''));
    inputValue = inputValue + '';
    inputValue = inputValue.replace(/([0-9]{2})$/g, ",$1");

    if (inputValue.length > 6) {
      inputValue = inputValue.replace(/([0-9]{3}),([0-9]{2}$)/g, "$1,$2");
    }

    setValue(inputValue);
  }

  return(
    <Fragment>
      <Container>
        <Content>
          <Header>
            <Title>
              Nova entrada
            </Title>
          </Header>

          <Form onSubmit={handleSubmit}>
            <InputForm 
              type="text"
              placeholder="Valor"
              maxLength={10}
              onChange={(e) => handleCurrency(e)}
              value={value}
              stageloading={isLoading}
              required
            />
            <InputForm
              type="text"
              placeholder="Descrição"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              stageloading={isLoading}
              required
            />

            <Button type="submit" stageloading={isLoading ? 1 : undefined}>
              {isLoading ?
                <ThreeDots color="#FFFFFF" height={50} width={50} />
              :
                "Salvar entrada"
              }
            </Button>
          </Form>
        </Content>
      </Container>
    </Fragment>
  );
}