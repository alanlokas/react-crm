import EditCompany from "./EditCompany";

function Company(props){
    return (
        <div className="min-w-[500px] max-w-[500px] py-8 px-4 max-w-lg m-2 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
            <img className="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-16 rounded-full sm:mx-0 sm:shrink-0" src={props.logo ? props.logo : "https://images.pexels.com/photos/188035/pexels-photo-188035.jpeg"} alt="Company" />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                    Company name:<br />{props.name}
                    </p>
                    <p className="text-slate-500 font-small">
                    Full company name<br />{props.fullname}
                    </p>
                    <p className="text-slate-500 font-small">
                    OIB: {props.oib}
                    </p>
                    <p className="text-slate-500 font-small">
                    Street<br />{props.street}
                    </p>
                    <p className="text-slate-500 font-small">
                    City<br />{props.zip} {props.city}
                    </p>
                    <p className="text-slate-500 font-small">
                    Country<br />{props.country}
                    </p>
                    <p className="text-slate-500 font-small">
                    NKD 2007: {props.nkd}
                    </p>
                    <p className="text-slate-500 font-small">
                    Closed: {props.closed}
                    </p>
                </div>

                <EditCompany 
                    key={props.key}
                    id={props.id} 
                    oib={props.oib} 
                    fullname={props.fullname} 
                    name={props.name} 
                    street={props.street} 
                    city={props.city} 
                    zip={props.zip} 
                    country={props.country}
                    nkd={props.nkd}
                    closed={props.closed}
                    logo={props.logo}
                    updateCompany={props.updateCompany}
                />

            </div>
        </div>
    );
}

export default Company;