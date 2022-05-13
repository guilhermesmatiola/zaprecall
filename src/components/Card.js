import QuestCard from "./QuestCard";
import AnswerCard from "./AnswerCard";

export default function Card({index, object, setState}) {

    if(object.state==="closed"){
        return(
            <>
                <div className="card" >
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
}