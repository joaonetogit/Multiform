import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { FormStep1 } from './pages/FormStep1/index';
import { FormStep2 } from './pages/FormStep2/index';
import { FormStep3 } from './pages/FormStep3/index';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<FormStep1 />} />
        <Route path="/step2" element={<FormStep2 />} />
        <Route path="/step3" element={<FormStep3 />} />
      </Routes>
    </BrowserRouter>
  );
};
