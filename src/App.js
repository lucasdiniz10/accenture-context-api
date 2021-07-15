import { useToogle } from "./contexts/ToogleProvider";
import ComponenteFilho from "./components/ComponenteFilho";

import './App.css';

function App() {
  const { estadoPai, handleClickEstadoPai } = useToogle();

  return (
    <div>
      <div>
        <h1>Componente Pai</h1>
        <button onClick={handleClickEstadoPai}>Clique aqui</button>
        {estadoPai && <p>aberto</p>}
        <ComponenteFilho />
      </div>
    </div>
  );
}

export default App;
