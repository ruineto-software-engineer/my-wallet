import { Fragment, useState } from "react";
import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import requests from "../../services/requests";
import dayjs from 'dayjs';
import { Container, Content, Title, Header } from "../../components/Movements";
import { Button, Form, Input as InputForm } from "../../components/Form";
import Swal from 'sweetalert2';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from  'react-loader-spinner';

export default function Output() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
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

    let outputData;
    if(value[0] === ","){
      let secondValue = "0" + value;
      outputData = {
        value: secondValue,
        description,
        date: dayjs().format('DD/MM'),
        isInput: false
      }
    }else{
      outputData = {
        value,
        description,
        date: dayjs().format('DD/MM'),
        isInput: false
      }
    }

    setIsloading(true);
    const promise = requests.postMovement(outputData, auth.token);
    setTimeout(() => {
      promise.then(() => {
        setIsloading(false);
        
        Toast.fire({
          icon: 'success',
          title: 'Saída cadastrada com sucesso!'
        }) 
        navigate("/balance");
      });
    }, 2000);
    setTimeout(() => {
      promise.catch(() => {
        setIsloading(false);

        Toast.fire({
          icon: 'error',
          text: 'Não foi possível efetuar o cadastro da saída. Ocorreu um erro inesperado, tente novamente mais tarde!'
        })
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
              Nova saída
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
                "Salvar saída"
              }
            </Button>
          </Form>
        </Content>
      </Container>
    </Fragment>
  );
}