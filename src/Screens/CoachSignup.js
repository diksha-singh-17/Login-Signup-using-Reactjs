import React from 'react';
import {Card, Button,FormGroup,Label,Input,CardHeader} from 'reactstrap';
import {CardBody,Col,Row} from 'reactstrap';
import { useForm } from "react-hook-form";


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

function DateOfBirthSection(props){
  return(
    <div>
          <TextInputDateOfBirth {...props} />
    </div>
  )
};
function GenderSection(props){
  return(
    <div>
          <TextInputGender {...props} />
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
function SpecialitySection(props){
  return(
    <div>
          <TextInputSpeciality {...props} />
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
    <Label for="examplename" >
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
          <Label for="examplePassword"  >
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
      type="date"
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
// Gender
function TextInputGender(props) {
  const {
    register,
    formState: { errors }
  } = props;
  const { ref, ...rest } = register("gender_section", {
    required: true
  });

  return (
    <div>
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
        {...rest}
        innerRef={ref}

      />
      <Label check className=' mx-2'>
        Male
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
        {...rest}
        innerRef={ref}
      />
      <Label check >
        Female
      </Label>
    </FormGroup>
    </div>
    <div className="text-danger d-flex">
        <h6>
          <small> 
            {errors.gender_section && "Gender is Required"}
          </small>
        </h6>
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
          <Label for="exampleNumber"  >
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
        <h6><small> {errors.mobilenumber_section && "Mobile Number should have 10digits"}</small></h6>
        </div>
        </FormGroup>
        
    </div>
  );
}
// Speciality
function TextInputSpeciality(props) {
  const {
    register,
    formState: { errors }
  } = props;
  const { ref, ...rest } = register("speciality_section", {
    required: true
  });

  return (
    <div>
      <FormGroup>
    <Label for="exampleSpeciality" >
    Speciality
    </Label>
    <Input
      id="exampleSpeciality"
      name="speciality"
      placeholder="Speciality"
      type="text"
      {...rest}
      innerRef={ref}
    />
        <div className="text-danger d-flex">
        <h6>
          <small> 
            {errors.speciality_section && "Speciality is Required"}
          </small>
        </h6>
        </div>
  </FormGroup>
    </div>
  );
}

// button
function SubmitBtn(props) {
  const onSubmit = (data) => {
    console.log(data.dateofbirth_section);
    var dob=data.dateofbirth_section;
    var year=dob.split("-");
    console.log(year[0]);
  }

  return (
      <div  className=" d-block p-16" >
      <Button  className="mt-2  bg-success "  style={{
        paddingRight:'160px',
        paddingLeft:'160px'
      }} onClick={() => props.handleSubmit(onSubmit)()}>
      Register
      </Button>

      </div>)
}
export default function CoachSignup() {
  const methods = useForm();
  return (
    <>
      <Card
  className="my-2 "
  style={{
    width: '60rem',
    border:'0'
  }}
>
  
  <CardHeader className=" bg-dark ">
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
            <span className='m-2'>  Life Coach Profile</span>
            </div>
  </CardHeader>
  <CardBody className='bg-dark'>
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
        <DateOfBirthSection {...methods}/>
        </Col>
        <Col md="6">
      <GenderSection {...methods}/>
      </Col>
    </Row>
    <Row>
      <Col md="6">
        <MobileNumberSection {...methods}/>
        </Col>
        <Col md="6">
      <SpecialitySection {...methods}/>
      </Col>
    </Row>
    < SubmitBtn {...methods} />  
  </CardBody>
  </Card>
    </>
  )
};
