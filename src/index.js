import React from "react";
import ReactDOM from "react-dom";
import { faker } from '@faker-js/faker';

import CommentDetails from "./CommentDetails"
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (

        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetails
                author="Sam" 
                commentText="Good conent" 
                date="Today at 6:05pm" 
                authorImage={faker.image.avatar()}
            />
            </ApprovalCard>
            
            <ApprovalCard>
            <CommentDetails 
                author="Max" 
                commentText="Great work" 
                date="Today at 6:00pm" 
                authorImage={faker.image.avatar()}
            />
            </ApprovalCard>
            
            <ApprovalCard>
            <CommentDetails
                author="Jen" 
                commentText="well done!" 
                date="Today at 6:10pm" 
                authorImage={faker.image.avatar()} 
            />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)