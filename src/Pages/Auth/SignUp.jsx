import React from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Layout,
  Menu,
  Form,
  message,
} from "antd";
import { Link, useNavigate } from "react-router-dom";

const { Text, Title } = Typography;
const { Header } = Layout;

const SignUp = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    // Savea credentials in local Storage
    localStorage.setItem("user", JSON.stringify(values));
    message.success("Account created successfully!");
    navigate("/login"); // goes to login after signup
  };

  return (
    <>
      <Layout>
        <Header style={{ background: "white" }}>
          <div
            style={{
              float: "left",
              fontSize: "22px",
              color: "purple",
              fontWeight: "bold",
            }}
          >
            Time2Treat
          </div>
          <Menu
            mode="horizontal"
            style={{
              float: "right",
              flex: 2,
              textAlign: "right",
              background: "#fff",
              borderBottom: "none",
            }}
          >
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="profile">
              <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="login">
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="signup">
              <Link to="/signup">Signup</Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>

      <Card
        style={{ width: 400, margin: "auto", borderRadius: 10, padding: 20 }}
      >
        <Title level={3} style={{ textAlign: "center" }}>
          Create Account
        </Title>
        <Text
          style={{ display: "block", textAlign: "center", marginBottom: 20 }}
        >
          Please sign up to book appointment
        </Text>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              block
              htmlType="submit"
              style={{
                marginBottom: 10,
                color: "white",
                backgroundColor: "purple",
              }}
            >
              Create account
            </Button>
          </Form.Item>
        </Form>

        <Text style={{ display: "block", textAlign: "center" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "purple" }}>
            Login here
          </Link>
        </Text>
      </Card>
    </>
  );
};

export default SignUp;
