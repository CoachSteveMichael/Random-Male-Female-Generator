import "./styles.css";
import {getData} from './actions/actions'
import Cardlist from './components/Cardlist'

export default function App() {
  return (
    <div className="App">
     <button onClick = {getData}>click me</button>
     <Cardlist />
    </div>
  );
}
