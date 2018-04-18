import React from 'react';

import {
  Card,
  CardTitle,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardLink,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
  CardHeader,
  Table
} from 'reactstrap';

import { Line } from 'react-chartjs-2';

import { overlayCards, bgCards, gradientCards } from 'demos/cardPage';

import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';

import Page from 'components/Page';
import { UserCard } from 'components/Card';

const CardPage = () => {
  return (
    <Page title="Tenants" breadcrumbs={[{ name: 'cards', active: true }]}>
        <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>Responsive</CardHeader>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Address</th>
                    <th>Postal Code</th>
                    <th>Number of Tenants </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>1983 Rollo Road</td>
                    <td> N9B 4T5</td>
                    <td> 10 </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>2018 </td>
                    <td>Thornton Road</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                  <th scope="row">4</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>

                <tr>
                <th scope="row">5</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>

              <tr>
              <th scope="row">6</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    <Row>
        <Col md={6} sm={6} xs={12} className="mb-3">
          <Card>
            <CardImg top src="/img/bg/background_1920-18.jpg" />
            <CardBody>
              <CardTitle>Properties with Pending Issues</CardTitle>
              <CardText>
                This example shows how to use card with list group{' '}
              </CardText>
            </CardBody>
            <ListGroup flush>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
            </ListGroup>
            <CardBody>
              <CardLink tag="a" href="#">
                Go to details
              </CardLink>
              <CardLink tag="a" href="#">
                More
              </CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        {['', 'top', 'left', 'right'].map(color => (
          <Col md={6} sm={6} xs={12} className="mb-3">
            <Card
              inverse
              className={`border-0 bg-gradient-theme${!!color ? '-' : ''}${
                color
                }`}
              style={{
                height: 200,
              }}
            >
              <CardBody className="d-flex flex-column justify-content-start align-items-start">
                <CardTitle>1983 Rolon Road</CardTitle>
                <CardText> 
                
                Acquired: January 5th
                Maintenace issues pending: 2

                </CardText>
              </CardBody>

              <CardBody className="d-flex justify-content-between align-items-center">
                <CardText>Karl David</CardText>
                <Button outline color="light">
                  Click
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      <Row>
        {overlayCards.map(({ imgUrl }) => {
          return (
            <Col md={6} sm={6} xs={12}>
              <Card inverse className="text-center">
                <CardImg width="100%" src={imgUrl} alt="Card image cap" />
                <CardImgOverlay>
                  <CardTitle>Card Title</CardTitle>
                  <CardText>inversed card</CardText>
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Col>
          );
        })}
      </Row>

      <Row>
        <Col md={5}>
          <UserCard
            avatar="/img/users/100_1.jpg"
            title="Chris"
            subtitle="Project Lead"
            text="Give me a star!"
            style={{
              height: 300,
            }}
          />
        </Col>

        <Col md={7}>
          <Card>
            <Line
              data={getStackLineChart({
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                ],
                data: [0, 13000, 5000, 24000, 16000, 25000, 10000],
              })}
              options={stackLineChartOptions}
            />
            <CardBody className="text-primary" style={{ position: 'absolute' }}>
              <CardTitle>Chart Card</CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        {bgCards.map(({ color }) => (
          <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
            <Card inverse color={color}>
              <CardBody>
                <CardTitle className="text-capitalize">
                  {color} card title
                </CardTitle>
                <CardText>
                 Fix one two
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      <Row>
        {gradientCards.map(({ color }) => (
          <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
            <Card
              inverse
              className={`bg-gradient-${color} text-center`}
              style={{ height: 200 }}
            >
              <CardBody className="d-flex flex-column flex-wrap justify-content-center align-items-center">
                <CardTitle>Gradient {color} title</CardTitle>
                <CardText>card text</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Page>
  );
};

export default CardPage;
