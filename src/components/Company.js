function Company(props){
    return (
    <>
        <h2>Full company name {props.fullname}</h2>
        <h2>Company name {props.name}</h2>
        <h2>Street {props.street}</h2>
        <h2>City {props.city}</h2>
        <h2>Zip code {props.zip}</h2>
        <h2>Country {props.country}</h2>
        <h2>NKD 2007 {props.nkd}</h2>
        <h2>Closed {props.closed}</h2>
    </>
    );
}

export default Company;