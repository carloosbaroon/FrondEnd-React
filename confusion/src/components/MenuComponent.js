import React from "react";
import {Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";

//This functional component that receives 1 props
function RenderMenuItem({dish}) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
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
                <RenderMenuItem dish={dish}/>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/home'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Home</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">{menu}</div>
        </div>
    );

}


export default Menu;