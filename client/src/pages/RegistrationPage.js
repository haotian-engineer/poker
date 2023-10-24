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
import { LinkButton } from "../components/forms/LinkButton";

const INITIAL_STATE = {
  email: "",
  name: "",
  password: "",
};

const RegistrationPage = () => {
  const { register, isLoggedIn } = useContext(authContext);
  const [data, setData] = useState(INITIAL_STATE);
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);

  useScrollToTopOnPageLoad();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  if (isLoggedIn) return <Redirect to="/" />;
  return (
    <RelativeWrapper>
      <Container
        fullHeight
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
            if (
              data.name.length >= 5 &&
              data.name.length <= 12 &&
              data.email.length >= 0 &&
              data.password.length >= 6
            ) {
              register({ ...data });
            }
          }}
        >
          <FormGroup mb="18px">
            <Input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup mb="18px">
            <Input
              type="text"
              name="name"
              autoComplete="off"
              value={data.name}
              onChange={handleChange}
              placeholder="Nickname"
              minLength="5"
              maxLength="12"
              required
            />
          </FormGroup>
          <FormGroup>
            <ShowPasswordButton
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            <Input
              type={`${showPassword ? `text` : `password`}`}
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={handleChange}
              minLength="6"
              autoComplete="new-password"
              required
            />
          </FormGroup>
          <ButtonGroup>
            <Button primary type="submit">
              Register
            </Button>
          </ButtonGroup>
          <LinkButton onClick={() => history.push("/login")}>
            I already have an account!
          </LinkButton>
        </Form>
      </Container>
    </RelativeWrapper>
  );
};

export default RegistrationPage;
