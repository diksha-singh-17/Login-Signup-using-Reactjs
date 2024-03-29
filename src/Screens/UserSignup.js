import React from 'react';
import {Card, Button,FormGroup,Label,Input,CardHeader} from 'reactstrap';
import {CardBody,Col,Row} from 'reactstrap';
import { useForm } from "react-hook-form";

import'./UserSignup.css';


function NameSection(props){
  return(
    <div>
      <TextInputName {...props}/>
    </div>
  )
};
function PasswordSection(props){
  return(
    <div>
          <TextInputPassword {...props} />
    </div>
  )
};
function MobileNumberSection(props){
  return(
    <div>
          <TextInputMobileNumber {...props} />
    </div>
  )
};
function EmailSection(props){
  return(
    <div>
          <TextInputEmail {...props} />
    </div>
  )
};
function DateOfBirthSection(props){
  return(
    <div>
          <TextInputDateOfBirth {...props} />
    </div>
  )
};

function PincodeSection(props){
  return(
    <div>
          <TextInputPincode {...props} />
    </div>
  )
};

function CitySection(props){
  return(
    <div>
          <TextInputCity {...props} />
    </div>
  )
};

function StateSection(props){
  return(
    <div>
          <TextInputState {...props} />
    </div>
  )
};

function CountrySection(props){
  return(
    <div>
          <TextInputCountry {...props} />
    </div>
  )
};

//  Name
function TextInputName(props) {
  const {
    register,
    formState: { errors }
  } = props;
  const { ref, ...rest } = register("name_section", {
    required: true,minLength:3,maxLength:50
  });

  return (
    <div>
      <FormGroup>
    <Label for="examplename">
      Name
    </Label>
    <Input
      id="examplename"
      name="username"
      placeholder="User Name"
      type="text"
      {...rest}
      innerRef={ref}
    />
        <div className="text-danger d-flex">
        <h6>
          <small> 
            {errors.name_section && "Name should have 3 to 5 characters"}
          </small>
        </h6>
        </div>
  </FormGroup>
    </div>
  );
}
//  Password
function TextInputPassword(props) {
  const {
    register,
    formState: { errors }
  } = props;
  const { ref, ...rest } = register("password_section", {
    required: true,minLength:5,maxLength:10
  });

  return (
    <div>
          <FormGroup>
          <Label for="examplePassword">
          Password
        </Label>
          <Input
              id="examplePassword"
              name="password"
              placeholder="Password "
              type="password"
            {...rest}
            innerRef={ref}
          />
              <div className="text-danger d-flex">
        <h6><small> {errors.password_section && "Password should have 5 to 10 characters"}</small></h6>
        </div>
        </FormGroup>
        
    </div>
  );
}
// Mobile Number
function TextInputMobileNumber(props) {
  const {
    register,
    formState: { errors }
  } = props;
  const { ref, ...rest } = register("mobilenumber_section", {
    required: true,minLength: 10
  });

  return (
    <div>
          <FormGroup>
          <Label for="exampleNumber">
      Mobile Number
    </Label>
          <Input
            id="exampleNumber"
            name="number"
            placeholder="Mobile Number "
            type="number"
            {...rest}
            innerRef={ref}
          />
              <div className="text-danger d-flex">
        <h6><small> {errors.mobilenumber_section && "Mobile Number should have 10 digits"}</small></h6>
        </div>
        </FormGroup>
        
    </div>
  );
}
// Email
function TextInputEmail(props) {
  const {
    register,
    formState: { errors }
  } = props;
  const { ref, ...rest } = register("email_section", {
    required: true
  });

  return (
    <div>
          <FormGroup>
          <Label for="exampleEmail">
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
            {...rest}
            innerRef={ref}
          />
              <div className="text-danger d-flex">
        <h6><small> {errors.email_section && "Email Field is Required"}</small></h6>
        </div>
        </FormGroup>
        
    </div>
  );
}
// Date Of Birth
function TextInputDateOfBirth(props) {
  const {
    register,
    formState: { errors }
  } = props;
  const { ref, ...rest } = register("dateofbirth_section", {
    required: true,min:20,max:100
  });

  return (
    <div>
          <FormGroup>
          <Label for="exampleDate" >
      Date of Birth
    </Label>
    <Input
      id="exampleDate"
      name="date"
      placeholder="Date of Birth"
      type="number"
            {...rest}
            innerRef={ref}
          />
              <div className="text-danger d-flex">
        <h6><small> {errors.dateofbirth_section && "Age should be between 20 and 100 years"}</small></h6>
        </div>
        </FormGroup>
        
    </div>
  );
}
// Pincode
function TextInputPincode(props) {
  const {
    register,
    formState: { errors }
  } = props;
  const { ref, ...rest } = register("pincode_section", {
    required: true,minLength:6
  });

  return (
    <div>
          <FormGroup>
          <Label for="examplePincode">
      Pincode
    </Label>
    <Input
      id="examplePincode"
      name="number"
      placeholder="Pincode "
      type="number"
            {...rest}
            innerRef={ref}
          />
              <div className="text-danger d-flex">
        <h6><small> {errors.pincode_section && "Pincode should be 6 digits"}</small></h6>
        </div>
        </FormGroup>
        
    </div>
  );
}
// City
function TextInputCity(props) {
  const {
    register,
    formState: { errors }
  } = props;
  const { ref, ...rest } = register("city_section", {
    required: true,minLength:6,maxLength:20
  });

  return (
    <div>
          <FormGroup>
          <Label for="exampleCity">
          City
        </Label>
        <Input
          id="exampleCity"
          name="city"
          placeholder="City"
          type="text"
            {...rest}
            innerRef={ref}
          />
              <div className="text-danger d-flex">
        <h6><small> {errors.city_section && "City should be 6 to 20 characters"}</small></h6>
        </div>
        </FormGroup>
        
    </div>
  );
}
// State
function TextInputState(props) {
  const {
    register,
    formState: { errors }
  } = props;
  const { ref, ...rest } = register("state_section", {
    required: true,minLength:6,maxLength:20
  });

  return (
    <div>
          <FormGroup>
          <Label for="exampleState">
          State
        </Label>
        <Input
          id="exampleState"
          name="state"
          placeholder="State "
          type="text"
            {...rest}
            innerRef={ref}
          />
              <div className="text-danger d-flex">
        <h6><small> {errors.state_section && "State should be 6 to 20 characters"}</small></h6>
        </div>
        </FormGroup>
        
    </div>
  );
}
// Country
function TextInputCountry(props) {
  const {
    register,
    formState: { errors }
  } = props;
  const { ref, ...rest } = register("country_section", {
    required: true,minLength:6,maxLength:20
  });

  return (
    <div>
          <FormGroup>
          <Label for="exampleCountry" >
          Country
        </Label>
        <Input
          id="exampleCountry"
          name="country"
          placeholder="Country "
          type="text"
            {...rest}
            innerRef={ref}
          />
              <div className="text-danger d-flex">
        <h6><small> {errors.country_section && "Country should be 6 to 20 characters"}</small></h6>
        </div>
        </FormGroup>
        
    </div>
  );
}

// button
function SubmitBtn(props) {
  const onSubmit = (data) => console.log(data);

  return (<div  className=" d-block p-2">
      <Button  className="mt-2  bg-success " style={{
        paddingRight:'160px',
        paddingLeft:'160px'
      }} onClick={() => props.handleSubmit(onSubmit)()}>
      Register
      </Button>

      </div>)
}

export default function UserSignup() {
  const methods = useForm();
  return (
    <>
      <Card
  className="my-2 bg-dark"
  style={{
    width: '60rem',
    border:'0'
  }}
>
  
  <CardHeader >
              <div className='d-flex justify-content-center align-items-center '>
              <span>
              <img
              className="rounded-circle  mx-auto d-block mb-4 mt-2 "
              style={{
                width: "60px",
                height: "60px",
                margin: "0",
                
              }}
              alt="Card"
              src="https://picsum.photos/300/200"
            />
              </span>
            <span className='m-2'>  User Profile</span>
            </div>
  </CardHeader>
  <CardBody>
    <Row>
      <Col md="6">
        <NameSection {...methods} />
    </Col>
    <Col md={6}>
        <PasswordSection {...methods} />
      </Col>
    </Row>
    <Row>
      <Col md="6">
        <MobileNumberSection {...methods}/>
        </Col>
        <Col md="6">
      <EmailSection {...methods}/>
      </Col>
    </Row>
    <Row>
      <Col md="6">
      <DateOfBirthSection {...methods}/>
      </Col>
      <Col md="6">
      <FormGroup tag="fieldset">
    <legend >
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
      <Label check className=' mx-2'>
        Male
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
      <Label check >
        Female
      </Label>
    </FormGroup>
    </div>
  </FormGroup>
        </Col>
    </Row>
    <Row>
      <Col md="6">
      <PincodeSection {...methods}/>
      </Col>
      <Col md="6">
      <CitySection {...methods}/>
        </Col>
    </Row>
    <Row>
      <Col md="6">
      <StateSection {...methods}/>
      </Col>
      <Col md="6">
      <CountrySection {...methods}/>
        </Col>

    </Row>
      < SubmitBtn {...methods} />  
  </CardBody>


  </Card>
    </>
  )
}

