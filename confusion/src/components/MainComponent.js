import Menu from "./MenuComponent";
import Home from "./HomeComponent";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {DISHES} from "../shared/dishes";
import {Component} from "react";
import {Routes, Route, Navigate} from "react-router-dom";

//This is a Container Component
class Main extends Component {

    //We declare the state of the component in the constructor
    constructor(props) {
        super(props);
        //Here we store properties of the component
        //Lifting state of DISHES, so they can be shared between more components
        this.state = {
            dishes: DISHES
        };
    }

    render() {

        //Creating functional component HomePage
        const HomePage  = () => {
            return(
                <Home/>
            );
        }

        return (
            //These classNames are defined in the App.css
            <div className="App">
                <Header/>
                <Routes>
                    <Route
                        path="/home"
                        element={<HomePage/>}
                    />
                    {/* Using props to pass the DISHES to MenuComponent
                    and passing the selected dish */}
                    <Route
                        exact path="/menu"
                        element={<Menu dishes={this.state.dishes}/>}
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/home" replace />}
                    />
                </Routes>
                <Footer/>
            </div>

        );
    }
}

export default Main;
