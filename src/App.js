import './App.css';
import Company from './components/Company';
//import { useState } from 'react';

function App() {
  //const [name, setName] = useState(''); // Destructor

  return (
    <div className="App">
   
      <Company 
        fullname="Pro Media d.o.o. za promociju proizvoda i usluga"
        name="Pro Media d.o.o."
        street="Prokljanska 12"
        city="Šibenik"
        zip="22000"
        country="Hrvatska" 
        nkd="12007" 
        closed="Yes"       
      />
    </div>
  );
}

export default App;
