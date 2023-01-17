import { Habit } from "./components/Habit";

function App() {
  return (
    <div>
      <Habit completed={3}/>
      <Habit completed={5}/>
      <Habit completed={10}/>
      <Habit completed={12}/>
    </div>
  );
}

export default App;


// Componente: Reaproveitar / isolar
// Propriedade: Uma informação enviada para modificar um componente ou visual ou comportamentalmente