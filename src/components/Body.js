import React from "react";

import Cardclosed from './Cardclosed';


export default function Body(){
    const quest=[
    
    {
    question:"O que é JSX?",
    answer:"Uma extensão de linguagem do JavaScript"
    },
     
    {
    question:"O React é __ ",
    answer:"Uma biblioteca JavaScript para construção de interfaces"
    },
      
    {
    question:"Componentes devem iniciar com __ ",
    answer:"Letra maiúscula"
    },
      
    {
    question:"Podemos colocar __ dentro do JSX",
    answer:"Expressões"
    },
      
    {
    question:"O ReactDOM nos ajuda __",
    answer:"Interagindo com a DOM para colocar componentes React na mesma"
    },
      
    {
    question:"Usamos o npm para __",
    answer:"Gerenciar os pacotes necessários e suas dependências"
    }, 
      
    {
    question:"Usamos props para __",
    answer:"Passar diferentes informações para componentes"
    },
      
    {
    question:"Usamos estado (state) para __",
    answer:"Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    },

    ];

    const [texts, setTexts]=React.useState(quest);

    quest.sort(randomize);
    function randomize(){
        return Math.random() -0.5;
    }

    function showAnswer(index){
    // return (
    //   <>
    //     {quest[index] => ((<Card onClick={() => showAnswer(index)} text={recalls.question} answer={recalls.answer} />))}
    //   </>
    // );
    }

    function showQuestion(index){
        return (
        <>
            {quest.map((quest) => (<Cardclosed onClick={() => showAnswer(index)} texts={quest.question} answer={quest.answer} />))}
        </>
        )
    }


	return (
    <>
      <div class="app">
        <div class="topbar"> 
          <img src="./images/logo.png" alt="ola"/>
          <h1>ZapRecall</h1>
        </div>
        {quest.map((quest,index) => (<Cardclosed onClick={() => showQuestion(index)} index={index}/>))}
      </div>
    </>
    );
}