import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='wrapper'>
    <Header/>
      <div className="holder">
        <Main/>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
