import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

function RenderDish({dish}) {
    if (dish) {
        return (
            <div className="col-12 col-md-5">
                <Card>
                    <CardImg src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

function RenderComments({comments}) {
    if (comments) {
        const commentList = comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <ul className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li className="list-inline-item">-- {comment.author}</li>
                        <li className="list-inline-item">{new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(Date.parse(comment.date)))} </li>
                    </ul>
                </div>
            );
        });
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {commentList}
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}


const DishDetail = (props) => {
    if (props.selectedDish) {
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.selectedDish}/>
                    <RenderComments comments={props.selectedDish.comments}/>
                </div>
            </div>
        );
    }
}


export default DishDetail;