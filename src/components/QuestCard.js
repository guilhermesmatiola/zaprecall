export default function QuestionCard({ index, object, setState}) {
    return(
        <div  className="card beige" >
            <h2>{object.question}</h2>
            <img src="./images/setinha.png" alt="seta" onClick={()=>setState(index,"answer")}/>     
        </div>
    )
}