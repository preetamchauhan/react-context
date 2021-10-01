import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Create from './model/create';
import View from './model/view';
import Delete from './model/delete';
import Product from './model/product';
import ViewDetails from './model/viewdetails';

function App() {
  // const [address, setAddress] = useState([]);
  
  // function addAddress(value){
  //   debugger;
  //   console.log(value)
  //   setAddress((address)=>{
  //     return [...address, value]
  //   })
  // }
  return (
    <>
    <div>
    <Router>
      <div>
        <span class="margin"><Link to="/">About</Link></span>
        <span class="margin"><Link to="/create">Create</Link></span>
        <span class="margin"><Link to="/view">View</Link></span>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/view">
            <View/>
          </Route>
          <Route path="/delete/:country/:city">
            <Delete/>
          </Route>
          <Route path="/:country/:city">
            <ViewDetails/>
          </Route>
          <Route path="/product">
            <Product/>
          </Route>
          <Route path="/">
            <div className="margin1">Welcome to user registration</div>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
    </>
  );
}

export default App;
