import {Card, Button,FormGroup,Label,Input,CardHeader} from 'reactstrap';
import {CardBody,Col,Row} from 'reactstrap'

import React from 'react'
import'./UserSignup.css';
export default function UserSignup() {
  return (
    <>
      <Card
  className="my-2 "
  style={{
    width: '60rem',
    border:'0'
  }}
>
  <CardHeader className="text-muted bg-dark ">
    User Profile
  </CardHeader>
  <CardBody>
    <Row>
      <Col md="6">
      <FormGroup>
    <Label for="examplename" className='text-muted'>
      Name
    </Label>
    <Input
      id="examplename"
      name="username"
      placeholder="User Name"
      type="text"
    />
  </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="examplePassword"  className='text-muted'>
          Password
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Password "
          type="password"
        />
      </FormGroup>
      </Col>
    </Row>
    <Row>
      
      <Col md="6">
      <FormGroup>
    <Label for="exampleNumber"  className='text-muted'>
      Mobile Number
    </Label>
    <Input
      id="exampleNumber"
      name="number"
      placeholder="Mobile Number "
      type="number"
    />
  </FormGroup>
        </Col>
        <Col md="6">
      <FormGroup>
        <Label for="exampleEmail"  className='text-muted'>
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
        />
      </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col md="6">
      <FormGroup>
    <Label for="exampleDatetime"  className='text-muted'>
      Date of Birth
    </Label>
    <Input
      id="exampleDatetime"
      name="datetime"
      placeholder="Date of Birth"
      type="datetime"
    />
  </FormGroup>
      </Col>
      <Col md="6">
      <FormGroup tag="fieldset">
    <legend className='text-muted'>
      Gender
    </legend>
    <div style={{
      display:'flex',
    }}>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check className='text-muted mx-2'>
        Male
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
      {' '}
      <Label check className='text-muted'>
        Female
      </Label>
    </FormGroup>
    </div>
  </FormGroup>
        </Col>
    </Row>
    <Row>
      <Col md="6">
      <FormGroup>
    <Label for="examplePincode"  className='text-muted'>
      Pincode
    </Label>
    <Input
      id="examplePincode"
      name="number"
      placeholder="Pincode "
      type="number"
    />
  </FormGroup>
      </Col>
      <Col md="6">
      <FormGroup>
        <Label for="exampleCity"  className='text-muted'>
          City
        </Label>
        <Input
          id="exampleCity"
          name="city"
          placeholder="City"
      type="text"
        />
      </FormGroup>
        </Col>
    </Row>
    <Row>
      <Col md="6">
      <FormGroup>
        <Label for="exampleState"  className='text-muted'>
          State
        </Label>
        <Input
          id="exampleState"
          name="state"
          placeholder="State "
      type="text"
        />
      </FormGroup>
      </Col>
      <Col md="6">
      <FormGroup>
        <Label for="exampleCountry"  className='text-muted'>
          Country
        </Label>
        <Input
          id="exampleCountry"
          name="country"
          placeholder="Country "
      type="text"
        />
      </FormGroup>
        </Col>
    </Row>
    <Button className="mt-2  bg-success ">
        Register
      </Button>
  </CardBody>
  </Card>
    </>
  )
}

