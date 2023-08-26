import Menu from "./components/MenuComponent";
import './App.css';
import {Navbar, NavbarBrand} from "reactstrap";
import {DISHES} from "./shared/dishes";
import {Component} from "react";

class App extends Component {

    constructor(props){
        super(props);
        //Lifting state of DISHES, so they can be shared between more components
        this.state = {
            dishes: DISHES
        };
    }
    render() {
        return (
            //These classNames are defined in the App.css
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                {/* Using props to pass the DISHES to MenuComponent */}
                <Menu dishes={this.state.dishes}/>
            </div>

        );
    }
}

export default App;
