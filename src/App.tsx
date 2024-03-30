
import './App.css';
import Navbar from './navbar';
import WordOfDay from './wordsection';
 

function App() {
  return (
    <div className='' data-theme="mytheme">
      <Navbar/>
      <div className='bg-primary h-screen '>          
        <WordOfDay/>
      </div>
      <div>
        {/* <Quizsection/> */}
      </div>
      
    </div>
  );
}

export default App;