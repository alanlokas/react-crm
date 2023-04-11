import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function EditCompany(props) {
  const [name, setName] = useState(props.name);
  const [fullname, setFullname] = useState(props.fullname);
  const [oib, setOib] = useState(props.oib);
  const [street, setStreet] = useState(props.street);
  const [city, setCity] = useState(props.city);
  const [zip, setZip] = useState(props.zip);
  const [country, setCountry] = useState(props.country);
  const [nkd, setNkd] = useState(props.nkd);
  const [closed, setClosed] = useState(props.closed);
  const [logo, setLogo] = useState(props.logo);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Update
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Company Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <form id="edit-company-modal" 
              onSubmit={(e) => {
                    handleClose();
                    e.preventDefault(); 
                    props.updateCompany(props.id, name, fullname, oib, street, city, zip, country, nkd, closed, logo);
                }} 
              className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Name
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                           id="inline-full-name" 
                           type="text" 
                           value={name}
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
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                           id="inline-full-name" 
                           type="text" 
                           value={fullname}
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
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                           id="inline-full-name" 
                           type="text" 
                           value={oib}
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
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                           id="inline-full-name" 
                           type="text" 
                           value={street}
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
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                           id="inline-full-name" 
                           type="text" 
                           value={city}
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
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                           id="inline-full-name" 
                           type="text" 
                           value={zip}
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
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                           id="inline-full-name" 
                           type="text" 
                           value={country}
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
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                           id="inline-full-name" 
                           type="text" 
                           value={nkd}
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
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                           id="inline-full-name" 
                           type="text" 
                           value={closed}
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
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                           id="inline-full-name" 
                           type="text" 
                           value={logo}
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
          <button form="edit-company-modal" className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">Update</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditCompany;