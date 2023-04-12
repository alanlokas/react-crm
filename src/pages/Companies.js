import '../App.css';
import AddCompany from '../components/AddCompany';
import Company from '../components/Company';
import EditCompany from '../components/EditCompany';
import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';

function Companies() {
  const [company, setCompany] = useState([
    {
      key:"66005432251",
      id: 1,
      oib:"66005432251",
      fullname:"Pro Media d.o.o. za promociju proizvoda i usluga",
      name:"Pro Media d.o.o.",
      street:"Prokljanska 12",
      city:"Šibenik",
      zip:"22000",
      country:"Hrvatska",
      nkd:"12007" ,
      closed:"Yes",
      logo:"https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg",  
    },
    {
      key:"66005432252",
      id: 2,
      oib:"66005432252",
      fullname:"Pro Media d.o.o. za promociju proizvoda i usluga",
      name:"Pro Media d.o.o.",
      street:"Prokljanska 12",
      city:"Šibenik",
      zip:"22000",
      country:"Hrvatska",
      nkd:"12007" ,
      closed:"Yes",
      logo:"https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg",  
    },
    { 
      key:"66005432253",
      id: 3,
      oib:"66005432253",
      fullname:"Pro Media d.o.o. za promociju proizvoda i usluga",
      name:"Pro Media d.o.o.",
      street:"Prokljanska 12",
      city:"Šibenik",
      zip:"22000",
      country:"Hrvatska",
      nkd:"12007" ,
      closed:"Yes",
      logo:"https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg",  
    },
    { 
      key:"66005432254",
      id: 4,
      oib:"66005432254",
      fullname:"Pro Media d.o.o. za promociju proizvoda i usluga",
      name:"Pro Media d.o.o.",
      street:"Prokljanska 12",
      city:"Šibenik",
      zip:"22000",
      country:"Hrvatska",
      nkd:"12007" ,
      closed:"Yes", 
    },
    {
      key:"66005432255",
      id: 5,
      oib:"66005432255",
      fullname:"Pro Media d.o.o. za promociju proizvoda i usluga",
      name:"Pro Media d.o.o.",
      street:"Prokljanska 12",
      city:"Šibenik",
      zip:"22000",
      country:"Hrvatska",
      nkd:"12007" ,
      closed:"Yes",
      logo:"https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg",  
    },
    {
      key:"66005432256",
      id: 6,
      oib:"66005432256",
      fullname:"Pro Media d.o.o. za promociju proizvoda i usluga",
      name:"Pro Media d.o.o.",
      street:"Prokljanska 12",
      city:"Šibenik",
      zip:"22000",
      country:"Hrvatska",
      nkd:"12007" ,
      closed:"Yes",
      logo:"https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg",  
    }
  ]); // Destructor

  function updateCompany(id, newName, newFullname, newOib, newStreet, newCity, newZip, newCountry, newNkd, newClosed, newLogo){
     const updatedCompanys = company.map((company) => {
       if(id == company.id){
         return {...company, name: newName, fullname: newFullname, oib: newOib, street: newStreet, city: newCity, zip: newZip, country: newCountry, nkd: newNkd, closed: newClosed, logo: newLogo }
       }
       return company;
     } );
   setCompany(updatedCompanys);
  }

  function newCompany(name, fullname, oib, street, city, zip, country, nkd, closed, logo){
    const newCompany = {
      key:uuidv4(), 
      id: uuidv4(), 
      oib:oib, 
      fullname:fullname, 
      name:name, 
      street:street, 
      city:city, 
      zip:zip, 
      country:country,
      nkd:nkd,
      closed:closed,
      logo:logo     
    }
    setCompany([...company, newCompany]);
  }

  return (
    <div>
      <AddCompany newCompany={newCompany} />
      <div className='flex flex-wrap justify-center'>
        {company.map((company) => {
          const editCompany = (
              <EditCompany 
                key={company.key} 
                id={company.id} 
                oib={company.oib} 
                fullname={company.fullname} 
                name={company.name} 
                street={company.street} 
                city={company.city} 
                zip={company.zip} 
                country={company.country}
                nkd={company.nkd}
                closed={company.closed}
                logo={company.logo} 
                updateCompany={updateCompany}
              />)
          return (
          <Company 
              key={company.key} 
              id={company.id} 
              oib={company.oib} 
              fullname={company.fullname} 
              name={company.name} 
              street={company.street} 
              city={company.city} 
              zip={company.zip} 
              country={company.country}
              nkd={company.nkd}
              closed={company.closed}
              logo={company.logo} 
              editCompany={editCompany}
              />
          );
        
        })}
      </div>
      
    </div>
  );
}

export default Companies;
