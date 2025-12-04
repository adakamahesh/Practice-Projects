import { Route, Routes } from 'react-router-dom';
import Input from "./components/input";
import NumberInput from './components/redux/NumberInput';

function App() {
  return (
    <Routes>
      <Route path='/input' element={<Input />} />
      <Route path='/number' element={<NumberInput />} />
    </Routes>
  )
}

export default App
