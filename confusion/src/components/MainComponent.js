import Menu from "./MenuComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import About from "./AboutComponent";
import {DISHES} from "../shared/dishes";
import {COMMENTS} from "../shared/comments";
import {LEADERS} from "../shared/leaders";
import {PROMOTIONS} from "../shared/promotions";
import {Component} from "react";
import {Routes, Route, Navigate, useParams} from "react-router-dom";
import DishDetailComponent from "./DishDetailComponent";

//This is a Container Component
class Main extends Component {

    //We declare the state of the component in the constructor
    constructor(props) {
        super(props);
        //Here we store properties of the component
        //Lifting state of DISHES, so they can be shared between more components
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

    render() {

        //Creating functional component HomePage
        const HomePage  = () => {
            return(
                //Since we return an array (But only with that element), we take position [0]
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                      promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                      leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = () => {
            let {dishId} = useParams();

            return(
                <DishDetailComponent dish={this.state.dishes.filter((dish) => dish.id === parseInt(dishId,10))[0]}
                                     comments={this.state.comments.filter((comment) => comment.dishId === parseInt(dishId,10))}
                />

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
                    <Route
                        path="/aboutus"
                        element={<About leaders={this.state.leaders}/>}
                    />
                    {/* Using props to pass the DISHES to MenuComponent
                    and passing the selected dish */}
                    <Route
                        exact path="/menu"
                        element={<Menu dishes={this.state.dishes}/>}
                    />
                    <Route
                        path="/menu/:dishId"
                        element={<DishWithId/>}
                    />
                    <Route
                        exact path="/contactus"
                        element={<Contact/>}
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
