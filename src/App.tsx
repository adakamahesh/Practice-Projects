import { Route, Routes } from 'react-router-dom';
import Input from "./components/input";
import NumberInput from './components/redux/NumberInput';
import Index from './components';
import Dashboard from './components/models/dashboard';

function App() {
  return (
    <Routes>

      {/* ALL PAGES USING FIXED LAYOUT */}
      <Route element={<Dashboard />}>
        <Route path='/input' element={<Input />} />
        <Route path='/number' element={<NumberInput />} />
        <Route path='/home' element={<Index />} />
      </Route>

      {/* If you want dashboard itself */}
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/' element={<Dashboard />} />

    </Routes>
  )
}

export default App;
