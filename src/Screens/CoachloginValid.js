import "bootstrap/dist/css/bootstrap.min.css";
import {React} from "react";
import { Form} from "reactstrap";
import { Card, CardTitle, Button, FormGroup, Label, Input } from "reactstrap";
import { useForm } from "react-hook-form";


function IdSection(props){
  return(
    <div>
        <TextInputId {...props} />
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

// For ID
function TextInputId(props) {
  const {
    register,
    formState: { errors }
  } = props;
  const { ref, ...rest } = register("id_section", {
    required: true
  });

  return (
    <div>
          <FormGroup>
            <Label for="id" hidden>
            Email
          </Label>
          <Input
            id="id"
            label="id"
            placeholder=" id"
            type="text"
            {...rest}
            innerRef={ref}
          />
              <div className="text-danger d-flex">
        <h6><small> {errors.id_section && "ID Field is Required"}</small></h6>
        </div>
        </FormGroup>
        

    </div>
  );
}
// For Password
function TextInputPassword(props) {
  const {
    register,
    formState: { errors }
  } = props;
  const { ref, ...rest } = register("password_section", {
    required: true,minLength:5,maxLength: 10
  });

  return (
    <div>
      <FormGroup>
          <Label for="password" hidden>
            Password
          </Label>
          <Input 
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
            {...rest}
            innerRef={ref}
          />
                  <div  className="text-danger d-flex">
        <h6><small> {errors.password_section && "Password should have 5 to 10 characters"}</small></h6>
        </div>
        </FormGroup> 
        

    </div>
  );
}
// button
function SubmitBtn(props) {
  const onSubmit = (data) => console.log(data);

  return (<div  className=" d-grid"> <Button color="primary"  onClick={() => props.handleSubmit(onSubmit)()}>Login</Button></div>)
}

export const CoachloginValid =()=> {
  const methods = useForm();
  return (
    <>
      <Card>
        <Card
          body
          className="bg-dark"
          style={{
            // width: "320px",
            // height: "320px",
          }}
        >
          <div
            className="d-flex"
          >
            <img
              className="rounded-circle  mx-auto d-block mb-4 mt-2"
              style={{
                width: "60px",
                height: "60px",
                margin: "0",
                
              }}
              alt="Card"
              src="https://picsum.photos/300/200"
            />
            <CardTitle tag="h5" className=" mb-2 mt-4">
              Login As Life Coach
            </CardTitle>
            </div>
            <Form>
            < IdSection {...methods}/>
            < PasswordSection {...methods}/>
            < SubmitBtn {...methods} />   
          </Form>
      

        </Card>
      </Card>
    </>
  );
}
