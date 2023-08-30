import React from "react";
import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";

//This functional component that receives 2 props
function RenderMenuItem({dish, onClick}) {
    return (
        <Card onClick={() => onClick(dish.id)}>
            {/* You can't do this.state.dish.image = newImage;
                            This one can only be modified using setState()
                        */}
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

//This is another way to create a functional component
const Menu = (props) => {
    // Here now we're using props to get the DISHES from App component
    const menu = props.dishes.map((dish) => {
        return (
            //Using the map function, we convert the array into a list,
            // this means that we MUST always have a KEY
            <div key={dish.id} className="col-12 col-md-5 m-1">
                {/* Calling RenderMenuItem component defined above with its props */}
                <RenderMenuItem dish={dish} onClick={props.onClick}/>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">{menu}</div>
        </div>
    );

}


export default Menu;