import { Routes, Route } from "react-router-dom";

import './App.css';
import Header from './Components/Header';
import Start from './Pages/Start';
import Example1 from './Pages/Example1';
import Example3 from './Pages/Example3';
import Example2 from './Pages/Example2';
import Certificate from "./Pages/Certificate";
import ErrorBoundary from "./ErrorBoundary";
import Page404 from "./Pages/404Page";

function App() {
  return (
    <main>
      <ErrorBoundary>
        <Header>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="example1" element={<Example1 />}/>
            <Route path="example1/new" element={<Certificate />} />
            <Route path="example1/:id" element={<Certificate />} />
            <Route path="example2" element={<Example2 />} />
            <Route path="example3" element={<Example3 />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Header>
      </ErrorBoundary>
    </main>
  );
}

export default App;
