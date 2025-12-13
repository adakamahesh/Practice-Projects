import { Route, Routes } from 'react-router-dom';
import Input from "./components/input";
import NumberInput from './components/redux/NumberInput';
import Index from './components';
import Dashboard from './components/models/dashboard';
import Delete from './components/Dialog/Delete';

function App() {
  return (
    <Routes>

      {/* ALL PAGES USING FIXED LAYOUT */}
      <Route element={<Dashboard />}>
        <Route path='/input' element={<Input />} />
        <Route path='/number' element={<NumberInput />} />
        <Route path='/input' element={<Index />} />
        <Route path='/home' element={<Delete />} />
      </Route>

      {/* If you want dashboard itself */}
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/' element={<Dashboard />} />

    </Routes>
  )
}

export default App;
