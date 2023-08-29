import React, {Component} from "react";
import DishDetail from "./DishDetailComponent";
import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";

//Only class components can hava a local state
class Menu extends Component {

    //We declare the state of the component in the constructor
    constructor(props) {
        super(props);

        //Here we store properties of the component
        this.state = {
            selectedDish: null
        }
    }

    OnDishSelect(dish) {
        //Here we set the selectedDish to the dish we just click using OnClick
        this.setState({selectedDish: dish})
    }

    render() {
        // Here now we're using props to get the DISHES from App component
        const menu = this.props.dishes.map((dish) => {
            return (
                //Using the map function, we convert the array into a list,
                // this means that we MUST always have a KEY
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.OnDishSelect(dish)}>
                        {/* You can't do this.state.dish.image = newImage;
                            This one can only be modified using setState()
                        */}
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">{menu}</div>
                <DishDetail selectedDish={this.state.selectedDish}/>
            </div>
        );
    }
}

export default Menu;