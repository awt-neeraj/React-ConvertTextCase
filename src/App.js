import {useState} from "react"
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'


function App() {

  const [mode, setMode] = useState('light')
  const [btnText, setBtnText] = useState("Dark Mode")

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      setBtnText('Light Mode')
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = '#FFF';
    }else{
      setMode('light')
      setBtnText('Dark Mode')
      document.body.style.backgroundColor = '#FFF';
      document.body.style.color = '#212529';
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} btnText={btnText}/>
      <div className="container">
        <TextForm mode={mode} />
      </div>
    </>
  );
}

export default App;
