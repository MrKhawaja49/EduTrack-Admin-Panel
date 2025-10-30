import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Layout,
  Menu,
  Button,
  Row,
  Col,
  Card,
  Avatar,
  Typography,
  Divider,
  Dropdown,
} from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title, Text, Link: AntLink } = Typography;

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Redirect to signup page after logout
    navigate("/signup");
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="profile">
        <Link to="/profile">My Profile</Link>
      </Menu.Item>
      <Menu.Item key="appointments">
        <Link to="/appointments">My Appointments</Link>
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      {/* Navbar */}
      <Header
        style={{
          background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
        }}
      >
        {/* Left: Logo + Title */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "40px", marginRight: "10px" }}
            src="/Images/logo.png"
            alt="Logo"
          />
          <div
            style={{
              fontSize: "22px",
              color: "purple",
              fontWeight: "bold",
            }}
          >
            Time2Treat
          </div>
        </div>

        {/*  Menu */}
        <Menu
          mode="horizontal"
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            borderBottom: "none",
            background: "white",
          }}
        >
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>

        {/*  User Dropdown */}
        <div>
          <Dropdown
            overlay={userMenu}
            placement="bottomRight"
            trigger={["click"]}
          >
            <Avatar
              style={{ backgroundColor: "purple", cursor: "pointer" }}
              icon={<UserOutlined />}
            />
          </Dropdown>
        </div>
      </Header>

      <Content style={{ padding: "40px 20px" }}>
        {/* Profile Section */}
        <Card
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "#c8a7c8ff",
          }}
        >
          <div style={{ textAlign: "left" }}>
            {/* Avatar +
            & Name */}
            <Avatar
              size={120}
              icon={<UserOutlined />}
              style={{ backgroundColor: "purple", marginBottom: "15px" }}
            />
            <Title level={3} style={{ marginBottom: "20px" }}>
              Hassan
            </Title>

            {/* Contact Infor */}
            <Divider orientation="left">Contact Information</Divider>
            <div style={{ marginBottom: "20px" }}>
              <Text strong>Email id: </Text>
              <AntLink href="mailto:kh.hassanshahid786@gmail.com">
                kh.hassanshahid786@gmail.com
              </AntLink>
              <br />
              <Text strong>Phone: </Text>
              <Text>0000000000</Text>
              <br />
              <Text strong>Address: </Text>
              <Text>—</Text>
            </div>

            {/* Basic Infor    */}
            <Divider orientation="left">Basic Information</Divider>
            <div>
              <Text strong>Gender: </Text>
              <Text>Not Selected</Text>
              <br />
              <Text strong>Birthday: </Text>
              <Text>Not Selected</Text>
            </div>
          </div>
        </Card>
      </Content>

      {/* Footer */}
      <Footer
        style={{
          color: "#fff",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* About Section */}
          <div style={{ flex: "1 1 300px", marginBottom: "20px" }}>
            <h3 style={{ color: "purple", fontWeight: "bold" }}>
              About Time2Treat
            </h3>
            <p style={{ color: "#000000ff", lineHeight: "1.6" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Company Links */}
          <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
            <h3
              style={{
                color: "purple",
                fontWeight: "bold",
                marginLeft: "80px",
              }}
            >
              COMPANY
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                color: "#000000ff",
                marginLeft: "80px",
              }}
            >
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
            <h3 style={{ color: "purple", fontWeight: "bold" }}>
              GET IN TOUCH
            </h3>
            <p style={{ color: "#000000ff", marginBottom: "5px" }}>
              +0-000-000-000
            </p>
            <p style={{ color: "#000000ff" }}>greatstackdev@gmail.com</p>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            color: "purple",
            fontWeight: "bold",
          }}
        >
          &copy; {new Date().getFullYear()} Time2Treat. All Rights Reserved By
          Khawaja Hassan.
        </div>
      </Footer>
    </Layout>
  );
};

export default Profile;
