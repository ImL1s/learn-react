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
    Modal, ModalHeader, ModalBody, ModalFooter, Table
} from 'reactstrap';


export default class Content extends React.Component<{}> {
    state = {
        album: AlbumJson,
        modal: false

    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }


    constructor(props) {
        super(props);
    }

    render() {
        const {album} = this.state;
        // const product = album[0];
        return (<Row>{
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
                                <Button color="secondary" onClick={this.toggle}>購買</Button>
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
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>300</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>150</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>900</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.toggle}>結帳</Button>{' '}
                                        <Button color="secondary" onClick={this.toggle}>取消</Button>
                                    </ModalFooter>
                                </Modal>

                            </CardBody>

                        </Card>
                    </Col>)
                })
            }</Row>
        )
    }
}