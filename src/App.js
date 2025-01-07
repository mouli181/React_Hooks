import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import Signin from './components/signin';
import Parent from './components/Parent';
import Counter from './Hooks/Counter';
import Color from './components/Color';
import Timer from './components/Timer';
import UseRefHook from './Hooks/UseRefHook';
import UseRefHooks from './Hooks/UseRefHooks';
import UseContextHook from './Hooks/UseContextHook';
// import UseContextHook from './components/usecontexthook';
function App() {
  return (
    <div className="App">

      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
      </BrowserRouter>
     */}
      {/* <Parent /> */}
      {/* <Counter />
      // */}
      {/* <UseContextHook /> */}
      {/* <UseRefHook /> */}
      {/* <Counter /> */}
      {/* <Color /> */}
      {/* <Timer /> */}
      {/* <UseRefHooks /> */}
      <UseContextHook />
      <UseRefHook />
    </div>
  );
}

export default App;
