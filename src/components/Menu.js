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
        } if(arr.length !== 8 && recalls==8 && havered==true){
            setWrong("show");
        }
    });

	return (
    <>
      <div className="bottombar">

                <div className={correct}>
                    <img src="./images/party.png" alt="" />
                    <h3>Parabéns</h3>
                </div>

                <div className={wrong}>
                    <img src="./images/sad.png" alt="" />
                    <h3>errou</h3>
                </div>

          <div classeName="column">
                <h3>{arr.length}/8 concluidos</h3> 
                {arr.map((name,index)=> (<ion-icon key={index} name={name}></ion-icon>
                ))} 
          </div>
      </div>
    </>
  );
}