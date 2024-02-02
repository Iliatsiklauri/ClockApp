import './App.css';
import Quotes from './components/Quotes';
import Time from './components/Time';

const App = () => {
  return (
    <div className="wrapper">
      <Quotes />
      <Time />
      <img src="public/jeremy-bishop-dvACrXUExLs-unsplash.png" className="bgc" alt="" />
    </div>
  );
};

export default App;
