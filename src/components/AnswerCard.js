export default function AnswerCard({ index, object, setState}) {
    return(
        <div className="card beige column" onClick={()=>setState(index,"closed")}>
            <h2>{object.answer}</h2>
            <div className="row spaced">
                <div className="red" onClick={()=>setState(index,"red")}> <h4>Não<br></br>lembrei</h4> </div>
                <div className="orange" onClick={()=>setState(index,"orange")}> <h4>Quase não<br></br>lembrei</h4> </div>
                <div className="green" onClick={()=>setState(index,"green")}> <h4>Zap! <br></br></h4> </div>
            </div>
        </div>
    )
}          