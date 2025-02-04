import { Form } from "antd";
import InputComponent from "../../../atoms/input";
import ButtonComponent from "../../../atoms/button";
import "./index.scss";
import { Link } from "react-router-dom";
import { googleLogo } from "../../../../assets/constant";
export default function SignIn() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form values: ", values);
  };
  const inputPadding = "8px 5px";
  const borderColor = "#00000066";
  const opacity = 0.8;

  return (
    <div className="sign-in">
      <div className="sign-in__title">Sign In</div>
      <div className="sign-in__form">
        <Form form={form} onFinish={onFinish} layout="vertical">
          {/* Email */}
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <InputComponent
              padding={inputPadding}
              placeholder="Enter your email"
              borderColor={borderColor}
              opacity={opacity}
            />
          </Form.Item>

          {/* Password */}
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              {
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                message:
                  "Password must be at least 6 characters long and include uppercase, lowercase, and a number!",
              },
            ]}
          >
            <InputComponent.Password
              padding={inputPadding}
              placeholder="Enter your password"
              borderColor={borderColor}
              opacity={opacity}
            />
          </Form.Item>
          <Link to="/forgot" className="sign-in__form__link">
            Forgot password?
          </Link>

          {/* Submit Button */}
          <Form.Item className="form-button-center">
            <ButtonComponent
              className="sign-in__form__submit"
              shape="primary"
              textColour="#ffff"
              bgColour="#FA7D0B"
              width={"100%"}
              height={"40px"}
            >
              SIGN IN
            </ButtonComponent>
          </Form.Item>
          <div className="sign-in__or">
            <div className="sign-in__or__line"></div>
            <div className="sign-in__or__text">or</div>
            <div className="sign-in__or__line"></div>
          </div>
          <ButtonComponent
            className="sign-in__form__submit"
            shape="primary"
            textColour="black"
            bgColour="#ffff"
            width={"100%"}
            height={"40px"}
            border="1px solid #00000066"
          >
            <img src={googleLogo} alt="" /> <span>Sign in with Google</span>
          </ButtonComponent>
        </Form>
      </div>
    </div>
  );
}
