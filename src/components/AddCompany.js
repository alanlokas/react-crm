import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function AddCompany(props) {
  const [name, setName] = useState('');
  const [fullname, setFullname] = useState('');
  const [oib, setOib] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [nkd, setNkd] = useState('');
  const [closed, setClosed] = useState('');
  const [logo, setLogo] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <div className="mt-2">
            <button onClick={handleShow} className="block m-2 mx-auto shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                        + Add Company
            </button>
        </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <form id="edit-company-modal" 
              onSubmit={(e) => {
                    e.preventDefault(); 
                    setName('');
                    setFullname('');
                    setOib('');
                    setStreet('');
                    setCity('');
                    setZip('');
                    setCountry('');
                    setNkd('');
                    setClosed('');
                    setLogo('');
                    props.newCompany(name, fullname, oib, street, city, zip, country, nkd, closed, logo);
                }} 
              className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Name
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                           id="inline-full-name" 
                           type="text" 
                           value={name}
                           placeholder="Company d.o.o."
                           onChange={(e) => {
                            setName(e.target.value);
                           }}
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Full Name
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                           id="inline-full-name" 
                           type="text" 
                           value={fullname}
                           placeholder="Company d.o.o. for service"
                           onChange={(e) => {
                            setFullname(e.target.value);
                           }} 
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        OIB
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                           id="inline-full-name" 
                           type="text" 
                           value={oib}
                           placeholder="00000000000"
                           onChange={(e) => {
                            setOib(e.target.value);
                           }}
                    />                
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Street
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                           id="inline-full-name" 
                           type="text" 
                           value={street}
                           placeholder="Street"
                           onChange={(e) => {
                            setStreet(e.target.value);
                           }}
                    />                
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        City
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                           id="inline-full-name" 
                           type="text" 
                           value={city}
                           placeholder="City"
                           onChange={(e) => {
                            setCity(e.target.value);
                           }}
                    />                
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Zip Code
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                           id="inline-full-name" 
                           type="text" 
                           value={zip}
                           placeholder="Zip code"
                           onChange={(e) => {
                            setZip(e.target.value);
                           }}
                    />                
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Country
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                           id="inline-full-name" 
                           type="text" 
                           value={country}
                           placeholder="Country"
                           onChange={(e) => {
                            setCountry(e.target.value);
                           }}
                    />                
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        NKD 2007
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                           id="inline-full-name" 
                           type="text" 
                           value={nkd}
                           placeholder="00000"
                           onChange={(e) => {
                            setNkd(e.target.value);
                           }} 
                    />                
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Closed
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                           id="inline-full-name" 
                           type="text" 
                           value={closed}
                           placeholder="Yes/No"
                           onChange={(e) => {
                            setClosed(e.target.value);
                           }}
                    />                
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Logo
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                           id="inline-full-name" 
                           type="text" 
                           value={logo}
                           placeholder="https://google.com/picture.jpg"
                           onChange={(e) => {
                            setLogo(e.target.value);
                           }} 
                    />                
                </div>
            </div>
        </form>

        </Modal.Body>
        <Modal.Footer>
          <button form="edit-company-modal" onClick={handleClose} className="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Close</button>
          <button form="edit-company-modal" onClick={handleClose} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">Add</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCompany;