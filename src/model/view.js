import {Link, useHistory} from 'react-router-dom';
import {useAddress}  from '../hooks/addressContext'
export default function View(){
    debugger;
    const {address} = useAddress();
    // var data = props.addressList;
    var history = new useHistory();
    return (<div>
            View Page
            <div>
               {
               address.map(x=> <div key={x.city}>
                 <span style={{marginRight: `5vh`}}>{x.city}</span>
                 <span style={{marginRight: `5vh`}}>{x.country}</span>
                 <span style={{marginRight: `5vh`}}>
                     <Link to={`/${x.country}/${x.city}`}>
                     View
                     </Link>
                     </span>
                 <span style={{marginRight: `5vh`}}>
                     <button onClick={()=> history.push(`/delete/${x.country}/${x.city}`)}>Delete</button>
                 </span>
                 </div>)
               }
            </div>
    </div>);
};