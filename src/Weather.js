import Form from "./Form";
import Now from "./Now";
import Forecast from "./Forecast";
function Weather(){
    return(
        <div className="Weather container mt-5 border">
            <Form />
            <Now />
            <Forecast />
        </div>
    )
}



export default Weather;