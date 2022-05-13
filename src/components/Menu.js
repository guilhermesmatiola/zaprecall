import React from "react";

export default function Menu({recalls, crasse, index}) {

    let arr=[];
    for(let i=0;i<recalls.length;i++){
    //console.log(recalls[i]);
    if(recalls[i].state==='red'){
      arr.push('close-circle');
    }
    if(recalls[i].state==='orange'){
      arr.push('help-circle');
    }
    if(recalls[i].state==='green'){
      arr.push('checkmark-circle');
    }
    
  }

	return (
    <>
      <div className="bottombar">
          <div classeName="column">
                <h3>{arr.length}/8 concluidos</h3> 
                {arr.map((name,index)=> (<ion-icon key={index} name={name}></ion-icon>
                ))} 
          </div>
      </div>
    </>
  );
}