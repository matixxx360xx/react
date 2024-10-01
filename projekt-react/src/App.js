import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  const [tytul, setTytul] = useState("");
  const [rodzaj, setRodzaj] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Tutył: ${tytul}, Rodzaj: ${rodzaj}`);
  };
  return (
    <div className="container" style={{ padding: "20px" }}>
      <h1>Dodaj film</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor='tytuł'>Tytuł filmu:</label>
          <input 
          type='text'
          id='tytul'
          className='form-control'
          value={tytul}
          onChange={(e)=>setTytul(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='rodzaj'>Rodzaj filmu:</label>
          <select
          id='rodzaj'
          className='form-control'
          value={rodzaj}
          onChange={(e)=>setRodzaj(e.target.value)}
          >
            <option id="">1</option>
            <option id="1">2</option>
            <option id="2">3</option>
            <option id="3">4</option>
            <option id="4">5</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Dodaj</button>
      </form>
    </div>
  );
}

export default App;
