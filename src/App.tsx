import { Route, Routes } from 'react-router-dom';
import Input from "./components/input";
import NumberInput from './components/redux/NumberInput';
import Index from './components';
import Dashboard from './components/models/dashboard';

function App() {
  return (
    <Routes>
      <Route path='/input' element={<Input />} />
      <Route path='/number' element={<NumberInput />} />
      <Route path='/display' element={<Index />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default App
