import { useRef, useState, useEffect } from 'react'
import './App.css';
import bgweb from './images/bgweb.webp'
import {uploadFile} from './services/api'

function App() {

  const fileInputref = useRef()
  const onUploadClick = () => {
    fileInputref.current.click()
  }

  const [file, setFile] = useState('')
  const [result, setResult] = useState('')

  useEffect(() => {
    const getImage = async () => {
      if(file){
        const data = new FormData
        data.append("name", file.name)
        data.append("file", file)

        let response = await uploadFile(data)
        setResult(response.path)
      }
    }
    getImage()
  }, [file])

  return (
    <div className="container">
      <img src={bgweb} alt="banner"></img>
      <div className="wrapper">
        <h1>EZ File Sharing</h1>
        <h3>Upload and share files in a click!</h3>
        <button onClick={() => onUploadClick()}>Upload</button>
        <input type="file"
        ref={fileInputref}
        style={{display:"none"}}
        onChange={(e) => setFile(e.target.files[0])}></input>

        <a href={result} target='_blank'>{result}</a>
      </div>
    </div>
  );
}

export default App;
