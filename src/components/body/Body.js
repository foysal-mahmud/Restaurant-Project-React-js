import { Redirect, Route } from 'react-router';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Menu from './Menu';

const Body = () => {
    return (
        <div>
           <Route path="/" exact component={Home} />
           <Route path="/menu" exact component={Menu} />
           <Route path="/contact" exact component={Contact} />
           <Route path="/about" exact component={About} />
           <Redirect from="/" to="/home" />
        </div>
    );
}

export default Body;