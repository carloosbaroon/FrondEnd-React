import React, {Component} from "react";
import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";

//This is now a Presentational Component
//Only class components can hava a local state
class Menu extends Component {

    //We declare the state of the component in the constructor
    constructor(props) {
        super(props);
    }

    render() {
        // Here now we're using props to get the DISHES from App component
        const menu = this.props.dishes.map((dish) => {
            return (
                //Using the map function, we convert the array into a list,
                // this means that we MUST always have a KEY
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(dish.id)}>
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
            </div>
        );
    }
}

export default Menu;