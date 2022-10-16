import "./App.css";
import Clock from "./components/clock/clock.component";
import Quote from "./components/quote/quote.component";
import Weather from "./components/weather/weather.component";
import { getBackgroundImage } from "./utils/unsplash/unsplash.utils";
function App() {
  getBackgroundImage();
  return (
    <div className='App'>
      <div className='top'>
        <Weather />
      </div>
      <div className='middle'>
        <Clock />
      </div>
      <div className='bottom'>
        <Quote />
      </div>
    </div>
  );
}

export default App;
