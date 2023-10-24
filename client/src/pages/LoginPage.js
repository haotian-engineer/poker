import React, { useContext, useState } from "react";
import Container from "../components/layout/Container";
import { Redirect, useHistory } from "react-router-dom";
import Button from "../components/buttons/Button";
import { Input } from "../components/forms/Input";
import { Form } from "../components/forms/Form";
import { FormGroup } from "../components/forms/FormGroup";
import { ButtonGroup } from "../components/forms/ButtonGroup";
import RelativeWrapper from "../components/layout/RelativeWrapper";
import ShowPasswordButton from "../components/buttons/ShowPasswordButton";
import useScrollToTopOnPageLoad from "../hooks/useScrollToTopOnPageLoad";
import authContext from "../context/auth/authContext";
import LogoIcon from "../components/logo/LogoIcon";
import { Label } from "../components/forms/Label";
import { LinkButton } from "../components/forms/LinkButton";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const history = useHistory();
  const { login, isLoggedIn } = useContext(authContext);
  const [data, setData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  useScrollToTopOnPageLoad();
  const [showPassword, setShowPassword] = useState(false);

  if (isLoggedIn) return <Redirect to="/" />;
  return (
    <RelativeWrapper>
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="6rem 2rem 2rem 2rem"
        contentCenteredMobile
      >
        <LogoIcon />
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            data.email.length > 0 && data.password.length > 0 && login(data);
          }}
        >
          <FormGroup mb="18px">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={data.email}
              required
              autoComplete="email"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <ShowPasswordButton
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            <Input
              type={`${showPassword ? `text` : `password`}`}
              value={data.password}
              placeholder="Password"
              name="password"
              autoComplete="current-password"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <div style={{ width: "100%", textAlign: "left" }}>
            <LinkButton>Forgot Password?</LinkButton>
          </div>
          <ButtonGroup>
            <Button primary type="submit">
              Login
            </Button>
          </ButtonGroup>
          <Label>Dont have an account?</Label>
          <LinkButton to="/register" onClick={() => history.push("/register")}>
            Create Account
          </LinkButton>
        </Form>
      </Container>
    </RelativeWrapper>
  );
};

export default LoginPage;
