import {useParams} from 'react-router-dom';
export default function ViewDetails(props){
  debugger;
  const {city, country} = useParams();
  if(city=="abc" || country=="def")
  return <div>Details not found</div>
    return (<div>
            View Details Page
            <div>
              <span>City: </span>
              <span>{city}</span>
            </div>
            <div>
              <span>Country: </span>
              <span>{country}</span>
            </div>
    </div>
    );
};