import React from 'react'
import { Card } from 'react-bootstrap'

const Cardb = ({ title, description, img }) => {
    return (
        <div>
            <Card style={{ width: "28rem" }}>
                <Card.Img  variant="top" src={img} className="image"/>
                <Card.Body>
                    <Card.Title style={{color: "black"}}>{title}</Card.Title>
                    <Card.Text style={{color: "black"}}>
                       {description}
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Cardb
