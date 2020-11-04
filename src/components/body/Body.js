import { Redirect, Route, Switch } from 'react-router';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Menu from './Menu';

const Body = () => {
    return (
        <div>
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/menu" exact component={Menu} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/about" exact component={About} />
                <Redirect from="/" to="/home" />
            </Switch>
           
        </div>
    );
}

export default Body;