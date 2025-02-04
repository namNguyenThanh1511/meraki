import { Form } from "antd";
import InputComponent from "../../../atoms/input";
import ButtonComponent from "../../../atoms/button";
import "./index.scss";
export default function SignUp() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form values: ", values);
  };
  const inputPadding = "8px 5px";
  const borderColor = "#00000066";
  const opacity = 0.8;

  return (
    <div className="sign-up">
      <div className="sign-up__title">Sign Up</div>
      <div className="sign-up__form">
        <Form form={form} onFinish={onFinish} layout="vertical">
          {/* Name */}
          <Form.Item
            name="name"
            rules={[
              { required: true, message: "Please input your name!" },
              { min: 3, message: "Name must be at least 3 characters long!" },
            ]}
          >
            <InputComponent
              borderColor={borderColor}
              padding={inputPadding}
              style={{ padding: "10px 20px" }}
              placeholder="Enter your name"
              opacity={opacity}
            />
          </Form.Item>

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

          {/* Confirm Password */}
          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <InputComponent.Password
              padding={inputPadding}
              placeholder="Confirm your password"
              borderColor={borderColor}
              opacity={opacity}
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item className="form-button-center">
            <ButtonComponent
              className="sign-up__form__submit"
              shape="primary"
              textColour="#ffff"
              bgColour="#FA7D0B"
              width={"100%"}
              height={"40px"}
            >
              SIGN UP
            </ButtonComponent>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
