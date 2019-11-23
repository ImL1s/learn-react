import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container, Row, Col, Jumbotron, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Badge } from 'reactstrap';
import Content from './components/Content';

function BHome() {
    return (
        // [normal bootstrap]
        // <div class="container">
        //     <div class="row">
        //         <div class="col">
        //             1 of 2
        //         </div>
        //         <div class="col">
        //             1 of 2
        //         </div>
        //     </div>

        //     <div class="row">
        //         <div class="col">
        //             1 of 3
        //         </div>
        //         <div class="col">
        //             1 of 3
        //         </div>
        //         <div class="col">
        //             1 of 3
        //         </div>
        //     </div>
        // </div>

        // [React style component]
        // <Container>
        //     <Row>
        //         <Col xs="12" md="4"><Button color="danger">Danger</Button></Col>
        //         <Col xs="12" md="4"><Button color="danger">Danger</Button></Col>
        //         <Col xs="12" md="4"><Button color="danger">Danger</Button></Col>
        //         <Col xs="12" md="4"><Button color="danger">Danger</Button></Col>
        //         <Col xs="12" md="4"><Button color="danger">Danger</Button></Col>
        //         <Col xs="12" md="4"><Button color="danger">Danger</Button></Col>
        //         <Col xs="12" md="4"><Button color="danger">Danger</Button></Col>
        //         <Col xs="12" md="4"><Button color="danger">Danger</Button></Col>
        //     </Row>

        //     <Col md={12}>
        //         <Jumbotron>
        //             <h1 className="display-3">美客唱片</h1>
        //             <p className="lead">
        //                 美客唱片成立以來，結合實體唱片通路、唱片公司、網站，因而擁有豐富、完整的音樂資源
        //             </p>
        //             <p className="lead">
        //                 並與電視、廣播等媒體進行策略聯盟，已迅速打響知名度，並廣受各界好評
        // </p>
        //             <p className="lead">
        //                 不僅如此，美客唱片將跨足大中華地區，透過舉辦跨國、跨區域的大型頒獎典禮、演唱會以及音樂活動
        //  </p>
        //             <p className="lead">
        //                 進一步擴大影響力，提昇流行音樂產業的動能
        //  </p>
        //             <hr className="my-2" />
        //             <Button color="primary">購物車</Button>
        //         </Jumbotron>
        //     </Col>

        //     <Row>
        //         <Col sm={6} md={4} className="mb-3">
        //             <Card>
        //                 <CardImg width="100%" src="https://img.ltn.com.tw/Upload/partner/page/2019/09/14/190914-4886-01-WvNZA.jpg" alt="Card image cap" />
        //                 <CardBody>
        //                     <CardTitle>商品名稱</CardTitle>
        //                     <CardSubtitle>
        //                         <h4><Badge color="success">售價：1000</Badge></h4>
        //                     </CardSubtitle>
        //                     <CardText>商品描述</CardText>
        //                     <Button color="secondary">購買</Button>
        //                 </CardBody>
        //             </Card>
        //         </Col>
        //         <Col sm={6} md={4} className="mb-3">
        //             <Card>
        //                 <CardImg width="100%" src="https://img.ltn.com.tw/Upload/partner/page/2019/09/14/190914-4886-01-WvNZA.jpg" alt="Card image cap" />
        //                 <CardBody>
        //                     <CardTitle>可愛的赤柴</CardTitle>
        //                     <CardSubtitle>
        //                         <h4><Badge color="success">售價：500</Badge></h4>
        //                     </CardSubtitle>
        //                     <CardText>這是一隻非常可愛的赤柴</CardText>
        //                     <Button color="secondary">購買</Button>
        //                 </CardBody>
        //             </Card>
        //         </Col>
        //     </Row>

        // </Container>


        <Content />


        // <div className="App">
        //     <Button color="danger">danger</Button>
        // </div>
    );
}

export default BHome;


