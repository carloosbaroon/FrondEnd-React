import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import {Navbar, NavbarBrand} from "reactstrap";
import {DISHES} from "../shared/dishes";
import {Component} from "react";

//This is a Container Component
class Main extends Component {

    //We declare the state of the component in the constructor
    constructor(props) {
        super(props);
        //Here we store properties of the component
        //Lifting state of DISHES, so they can be shared between more components
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    OnDishSelect(dishId) {
        //Here we set the selectedDish to the dish we just click using OnClick
        this.setState({selectedDish: dishId})
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
                {/* Using props to pass the DISHES to MenuComponent
                    and passing the selected dish */}
                <Menu dishes={this.state.dishes}
                      onClick={(dishId) => this.OnDishSelect(dishId)}/>
                <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
            </div>

        );
    }
}

export default Main;
