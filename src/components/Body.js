import React from "react";
import Card from './Card';
import Menu from './Menu';

export default function Body(){
    const quest=[
    
     {
      question:"O que é JSX ?",
      answer:"Uma extensão de linguagem do JavaScript",
      state:"closed"
    },{
      question:"O React é __  ",
      answer:"Uma biblioteca JavaScript para construção de interfaces",
      state:"closed"
    },{
      question:"Componentes devem iniciar com __",
      answer:"Letra maiúscula",
      state:"closed"
    },{
      question:"Podemos colocar __ dentro do JSX",
      answer:"Expressões",
      state:"closed"
    },{
      question:"O ReactDOM nos ajuda ",
      answer:"Interagindo com a DOM para colocar componentes React na mesma",
      state:"closed"
    },{
      question:"Usamos o npm para __",
      answer:"Gerenciar os pacotes necessários e suas dependências",
      state:"closed"
    },{
      question:"Usamos props para __ ",
      answer:"Passar diferentes informações para componentes ",
      state:"closed"
    },{
      question:"Usamos estado (state) para __  ",
      answer:"Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
      state:"closed"
    }

    ];

    quest.sort(randomize);
    function randomize(){
        return Math.random() -0.5;
    }

    const [recalls, setRecalls] = React.useState(quest);

    function setState(index,state){
        console.log(state);
        let newRecalls=[...recalls];
        newRecalls[index].state=state;
        setRecalls(newRecalls);
        console.log(recalls);
    }



    const [inicial, setInicial] = React.useState("inicial");
    const [app, setApp] = React.useState("hide")

    function changeScreen() {
        setInicial("inicial hide");
        setApp("app");
    }

	return (
    <>
        <div className={inicial}>
                <img src="./images/logo.png" alt="" height='140px' width="160px"/>
                <h1>ZapRecall</h1>
                <div className="button" onClick={changeScreen}> <h5>Iniciar Recall!</h5></div>
        </div>
        <div className={app}>
            <div className="topbar"> 
                <img src="./images/logo.png" alt="ola"/>
                <h1>ZapRecall</h1>
            </div>
            {recalls.map((recall,index) => (<Card index={index} object={recall} setState={setState}/>
            ))
            }
            <Menu recalls={recalls}/>
        </div>
        
    </>
    );
}