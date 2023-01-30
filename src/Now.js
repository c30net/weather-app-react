function Now(){
    return(
       <div className="NOW">
         <div class="row">
        <div class="col-8">
          <div class="row col-12">
            <span class="col-6 m-0 pe-0">
              <img src="" alt="" id="imageId" />
              <span class="temperature"></span>
              <span class="units">
                <a href="#0" class="celsiusTemp removeUnderline disabledTemp">°C</a> | <a href="#0" class=" fahrenheitTemp removeUnderline">℉</a>
              </span>
            </span>
            <span class="col-6 ps-0 pt-3">
              <ul class="weatherDetails">
                <li>Humidity: <span class="humidity"></span>%</li>
                <li>wind: <span class="wind"></span> km/h</li>
              </ul>
            </span>
          </div>
        </div>
        <div class="col-4">
          <p class="cityName"></p>
          <ul class="dayDescription">
            <li id="date"></li>
            <li id="weatherDescription">
                      
            </li>
          </ul>
        </div>
      </div>
       </div>
    );
}


export default Now;