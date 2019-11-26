import React from 'react';
import AlbumJson from './Album.json';
import {
    Button,
    Container,
    Row,
    Col,
    Jumbotron,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Badge,
    Modal, ModalHeader, ModalBody, ModalFooter, Table, Alert
} from 'reactstrap';


export default class Content extends React.Component<{}> {
    state = {
        album: AlbumJson,
        modal: false,
        cart: []

    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    addToCart = (product) => {
        const cart = this.state.cart;
        cart.push(product);

        this.setState({
            cart
        });
    };

    deleteCartItem = (index) => {
        const cart = this.state.cart;
        cart.splice(index, 1);

        this.setState({
            cart
        });
    };

    checkout = (totalPrice) => {
        alert(`已從您的信用卡扣除${totalPrice}元!`);
    };

    calcTotalPrice = () => this.state.cart.reduce((preAll, item) => (preAll += item.price), 0);

    constructor(props) {
        super(props);
    }

    render() {
        const {album} = this.state;
        // const product = album[0];
        return (
            <div>
                <Button className="m-4" disabled={this.state.cart.length === 0}
                        onClick={() => this.toggle()}>購物車({this.state.cart.length})</Button>
                <Row>{
                    album.map(product => {
                        return (<Col sm={12} md={6} xl={4} className="mb-3">
                            <Card>
                                <CardImg width="100%" src={product.img} alt="Card image cap"/>
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
                                    <Button color="secondary"
                                            disabled={this.state.cart.find(item => item.id === product.id)}
                                            onClick={() => this.addToCart(product)}>購買</Button>

                                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                        <ModalHeader toggle={this.toggle}>購物車</ModalHeader>
                                        <ModalBody>
                                            <Table>
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>品項</th>
                                                    <th>價格</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    this.state.cart.map((item, index) => (
                                                        <tr>
                                                            <th scope="row">{index + 1}</th>
                                                            <td>{item.title}</td>
                                                            <td>{item.price}</td>
                                                            <td><Button color="danger"
                                                                        onClick={() => this.deleteCartItem(index)}>X</Button>
                                                            </td>

                                                        </tr>
                                                    ))
                                                }
                                                </tbody>
                                            </Table>
                                            <Alert color="success" className="text-right">
                                                總價:
                                                {this.calcTotalPrice()}
                                            </Alert>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="primary"
                                                    onClick={() => this.checkout(this.calcTotalPrice())}>結帳</Button>{' '}
                                            <Button color="secondary" onClick={this.toggle}>取消</Button>
                                        </ModalFooter>
                                    </Modal>

                                </CardBody>

                            </Card>
                        </Col>)
                    })
                }</Row>
            </div>
        )
    }
}