import React, { Component } from 'react';
import AlbumJson from './Album.json';
import { Button, Container, Row, Col, Jumbotron, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Badge } from 'reactstrap';


export default class Content extends React.Component<{}> {
    state = {
        album: AlbumJson
    }

    constructor() {
        super();
    }

    render() {
        const { album } = this.state;
        // const product = album[0];
        return (<Row>{
            album.map(product => {
                return (<Col sm={12} md={6} xl={4} className="mb-3">
                    <Card>
                        <CardImg width="100%" src={product.img} alt="Card image cap"></CardImg>
                        <CardBody>
                            <CardTitle>{product.title}</CardTitle>
                            <CardSubtitle>
                                <h4>
                                    {
                                        product.discount
                                            ? <Badge color="danger">特價：{product.price}</Badge>
                                            : <Badge color="success">售價：{product.price}</Badge>
                                    }
                                </h4>
                            </CardSubtitle>
                            <CardText>{product.desc}</CardText>
                            <Button color="secondary">購買</Button>
                        </CardBody>
                    </Card>
                </Col>)
            })
        }</Row>
        )

    }
}