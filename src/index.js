import reactDom from "react-dom";
import Body from './components/Body';

function App(){
    return(
    <>
        <Body/>
        
    </>
        
    );
}

reactDom.render(<App/>, document.querySelector(".root"));