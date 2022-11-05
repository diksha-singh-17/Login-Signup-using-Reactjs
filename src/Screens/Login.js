import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Card,  CardTitle ,Button,CardHeader} from 'reactstrap';
import {CardBody,Col,Row} from 'reactstrap'
// import { useNavigate } from "react-router-dom";
import {Link } from "react-router-dom";

export default function Login() {
  return (
    <>
<Card
  className="my-2 "
  style={{
    width: '60rem',
    border:'0'
  }}
>
  <CardHeader className="bg-dark d-flex">
    WeCare
  </CardHeader>
  <CardBody>
    <CardTitle tag="h5" className="text-muted mb-2">
      We are at the heart of appropriate care
    </CardTitle>
    <div
  //  style={{
    // marginLeft:'80px'
    // display:'flex',
    // justifyContent:'center',
    // alignItems:'center'
    // }}
    className="d-flex justify-content-center align-items-center"
    >
    
    <Row >
  <Col sm="6" className='text-align: center;'>
    <Card body className='bg-dark'  style={{
        width: '320px',
        height:'320px'
      }}>
    <img className='rounded-circle  mx-auto d-block'
        style={{
        width: '120px',
        height:'120px'
      }}
    alt="Card"
    src="https://picsum.photos/300/200"
  />

      <Link to="./CoachloginValid" className='d-grid' style={{ textDecoration: 'none' }}> 
      <Button className="bg-primary" style={{marginTop:'60px'}}>
      Login as a coach
      </Button>
      </Link>
      <Link to="./CoachSignup" className='d-grid' style={{ textDecoration: 'none' }}> 
      <Button className="mt-2  bg-primary">
        Join as a Coach
      </Button>
      </Link>
    </Card>
  </Col>
  <Col sm="6">
    <Card body className='bg-dark'  style={{
        width: '320px',
        height:'320px',
      }}>
  
      <img className='rounded-circle  mx-auto d-block'
        style={{
        width: '120px',
        height:'120px',
      }}
    alt="Card"
    src="https://picsum.photos/300/200"
  />
      <Link to="./Error" className='d-grid' style={{ textDecoration: 'none' }}> 
      <Button className=" bg-primary" style={{marginTop:'60px'}}>
        Login as a User
      </Button>
      </Link>

      <Link to="./UserSignup" className='d-grid' style={{ textDecoration: 'none' }}> 
      <Button className="mt-2 bg-primary">
        Join as a user
      </Button>
      </Link>
    </Card>
  </Col>
</Row>
</div>
  </CardBody>
</Card>
    </>
  )
}

