import {useParams} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {useAddress} from '../hooks/addressContext'
export default function Delete(props){
  debugger;
  const {dispatch} = useAddress();
  var history = new useHistory();
  const {city, country} = useParams();
  function deleteAddress(){
    dispatch({type: "delete", city: city, country: country});
    history.push(`/view`);
  }

    return (<div>
            Delete Page
            <div>
              Do you want to delete City: {city} and Country: {country}
            </div>
            <div>
                <button onClick={deleteAddress}>Delete</button>
            </div>
    </div>
    );
};