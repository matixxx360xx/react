import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React, { useState } from 'react';

function App() {

const[tytul,setTytul] = useState("");  
const[rodzaj,setRodzaj] = useState("");

const handleSubmit = (e) =>{
  e.preventDefault();
}

console.log(`Tytuł:${tytul},Rodzaj:${rodzaj}`);
  return (
    <div className="container" style={{padding:"20px"}}>
      <h1>Dodaj film</h1>
      <form onSubmit={handleSubmit}>
        <div className="from-group">
          <label htmlFor='tytuł'>Tytuł filmu</label>
          <input type="text" id="tytul" className="from-control" value={tytul} onChange={(e) =>setRodzaj(e.target.value)}/>
        </div>
        <div className="form-group">
          
        </div>

        
      </form>
    </div>
  );
}

export default App;
