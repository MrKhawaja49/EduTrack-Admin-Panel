import React, { useState } from "react";
import { Card, Input, Button, Typography, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

const { Text, Title } = Typography;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      message.error("No account found. Please sign up first!");
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      message.success("Login Successful!");
      localStorage.setItem("user-token", "12345671256789");
      window.location.pathname = "/"; // goes to dashboard
    } else {
      message.error("Invalid email or password!");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #dfe9f3 0%, #ffffff 100%)",
      }}
    >
      <Card
        style={{
          width: 400,
          borderRadius: 15,
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
          padding: 25,
          backgroundColor: "white",
        }}
      >
        <Title level={3} style={{ textAlign: "center", color: "#6a1b9a" }}>
          Welcome Back
        </Title>
        <Text
          style={{ display: "block", textAlign: "center", marginBottom: 25 }}
        >
          Please log in to continue
        </Text>

        <Text>Email</Text>
        <Input
          placeholder="Enter your email"
          style={{ marginBottom: 15 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Text>Password</Text>
        <Input.Password
          placeholder="Enter your password"
          style={{ marginBottom: 20 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          type="primary"
          block
          style={{
            marginBottom: 15,
            color: "white",
            backgroundColor: "#6a1b9a",
            borderRadius: "6px",
          }}
          onClick={handleLogin}
        >
          Login
        </Button>

        <Text style={{ display: "block", textAlign: "center" }}>
          Don’t have an account?{" "}
          <Link to="/signup" style={{ color: "#6a1b9a", fontWeight: 500 }}>
            Sign up
          </Link>
        </Text>
      </Card>
    </div>
  );
};

export default Login;
