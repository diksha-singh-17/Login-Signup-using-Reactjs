import "bootstrap/dist/css/bootstrap.min.css";
import {React} from "react";
import { Form} from "reactstrap";
import { Card, CardTitle, Button, FormGroup, Label, Input } from "reactstrap";
import { useForm } from "react-hook-form";

import "./CoachLogin.css";

function IdSection(props){
  return(
    <div>
        <TextInput {...props} />
    </div>
  )
};
function PassSection(props){
  return(
    <div>
          <TextInput1 {...props} />
    </div>
  )
};

function TextInput(props) {
  const {
    register,
    formState: { errors }
  } = props;
  const { ref, ...rest } = register("idsec", {
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
        </FormGroup>
      {errors.idsec && "Cannot be blank"}
    </div>
  );
}
function TextInput1(props) {
  const {
    register,
    formState: { errors }
  } = props;
  const { ref, ...rest } = register("passsec", {
    required: true
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
        </FormGroup> 
      {errors.passsec && "Cannot be blank"}
    </div>
  );
}
// button
function SubmitBtn(props) {
  const onSubmit = (data) => console.log(data);

  return <Button onClick={() => props.handleSubmit(onSubmit)()}>Submit</Button>;
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
            style={{
              display: "flex",
              //  flexdirection:'row'
            }}
          >
            <img
              className="rounded-circle  mx-auto d-block"
              style={{
                width: "60px",
                height: "60px",
                margin: "0",
              }}
              alt="Card"
              src="https://picsum.photos/300/200"
            />
            <CardTitle tag="h5" className=" mb-2 mt-2">
              Login As Life Coach
            </CardTitle>
            </div>
            <Form>
            < IdSection {...methods}/>
            < PassSection {...methods}/>
            < SubmitBtn {...methods} />   
          </Form>
      

        </Card>
      </Card>
    </>
  );
}
