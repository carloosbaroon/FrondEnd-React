import Menu from "./components/MenuComponent";
import './App.css';
import {Navbar, NavbarBrand} from "reactstrap";

function App() {
    return (
        //These classNames are defined in the App.css
        <div className="App">
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <Menu/>
        </div>
    );
}

export default App;
