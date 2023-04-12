import { createContext, useState } from 'react';
import './App.css';
import Todo from './Components/Todo';
export const globaldata = createContext();

function App() {
  const [fordata, setfordata] = useState(true)
  return (
    <div className="App">
      <globaldata.Provider value={{fordata, setfordata}}>
      <Todo/>
      </globaldata.Provider>
    </div>
  );
}

export default App;
