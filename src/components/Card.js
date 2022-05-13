import QuestCard from "./QuestCard";
import AnswerCard from "./AnswerCard";

export default function Card({index, object, setState}) {

    let name="close-circle";
    let crasse="colorGreen";
    let color="green";

    if(object.state==="closed"){
        return(
            <>
                <div className="card" onClick={()=>setState(index,"question")}>
                    <h2>Pergunta {index+1}</h2>
                    <img className="vector" src="./images/Vector.png" alt="ola" onClick={()=>setState(index,"question")}/>
                </div>
            </>
        );
    }

    if(object.state==="question"){
        return(
        <QuestCard index={index} object={object} setState={setState}/>
        );
    }

    if(object.state==="answer"){
        return( 
        <AnswerCard index={index} object={object} setState={setState}/>
        );
    }
    if(object.state==="red"){
        name="close-circle";
        crasse="colorRed";
        color="red"
    }
    
    if(object.state==="orange"){
        name="help-circle";
        crasse="colorOrange";
        color="orange"
    }

    if(object.state==="green"){
        name="checkmark-circle";
        crasse="colorGreen";
        
    }
    return(
        <>
            <div className="card" onClick={()=>setState(index,"question")}>
                <h2 className={crasse} >Pergunta {index+1} </h2>
                <ion-icon key={index} className={crasse} name={name}></ion-icon>
            </div>
        </>
    );
}