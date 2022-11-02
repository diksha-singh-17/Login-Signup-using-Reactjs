import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Form} from "reactstrap";
import { Card, CardTitle, Button, FormGroup, Label, Input } from "reactstrap";
import { useForm } from "react-hook-form";

import "./CoachLogin.css";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // let navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    // navigate("/Login");
    //  integrate with login api
  };
  console.log(errors);
  return (
    <>
      <Form>
        <FormGroup>
          <Label for="id" hidden>
            Email
          </Label>
          <Input
            id="id"
            label="id"
            placeholder="Coach id"
            type="text"
            className={`${errors.id && "invalid"}`}
            {...register("id", { required: true })}
          />
        </FormGroup>
        <span className="errormsg">
          {errors?.id && "ID is Required"}
        </span>
        <FormGroup>
          {/* <Label for="password" hidden>
            Password
          </Label> */}
          <Input 
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
            className= {`${errors.password && "invalid"}`}
            {...register("password", { required: true })}
          />
        </FormGroup> 
        <span className="errormsg">
          {errors?.password && "Password is Required"}
        </span>
          {/* <FormFeedback className="text-danger">{errors.password.message}
      Oh noes! that name is already taken
    </FormFeedback> */}
          <Button
        className="bg-primary"
        name="btn"
        style={{ marginTop: "40px" }}
        onClick={handleSubmit(onSubmit)}
      >
        Login
      </Button>
      </Form>

    </>
  );
};

export const CoachLogin =()=> {
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
          <LoginForm />
        </Card>
      </Card>
    </>
  );
}
