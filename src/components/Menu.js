import React from "react";
import { useEffect } from "react";
let havered=false;

export default function Menu({recalls, crasse, index}) {

    let arr=[];
    for(let i=0;i<recalls.length;i++){
    //console.log(recalls[i]);
    if(recalls[i].state==='red'){
      arr.push('close-circle');
      havered=true;
    }
    if(recalls[i].state==='orange'){
      arr.push('help-circle');
    }
    if(recalls[i].state==='green'){
      arr.push('checkmark-circle');
    }
    
  }

    const [correct, setCorrect] = React.useState("hide");
    const [wrong, setWrong] = React.useState("hide");

    useEffect(() => {
        if(arr.length === 8 && havered==false){
            setCorrect("show");
        } if(arr.length === 8 && havered==true){
            setWrong("show");
        }
    });

	return (
    <>
      <div className="bottombar">
          <div className="column2">
                <div className={correct} >

                  <div className="allcorrect">
                      <img className="emoji" src="./images/party.png" alt="" />
                      <h3 className="bold">Parabéns!</h3>
                  </div>
      
                      <h3>Você não esqueceu de <br></br> nenhum flashcard! </h3>
                
                </div>

                <div className={wrong}>

                  <div className="allcorrect">
                      <img className="emoji" src="./images/sad.png" alt="" />
                      <h3 className="bold">Putz...</h3>
                  </div>
                      <h3>Ainda faltam alguns...<br></br>Mas não desanime!</h3>
                </div>

                <div classeName="column2">
                      <h3>{arr.length}/8 concluidos</h3> 
                      {arr.map((name,index)=> (<ion-icon key={index} name={name}></ion-icon>
                      ))} 
                </div>
          </div>  

      </div>
    </>
  );
}