import React from "react";
import { Layout, Row, Col, Menu, Button } from "antd";
import "./Navbar.css";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Layout>
      <Header className="navbar">
        <Row align="middle">
          {/* Left: Website Title */}
          <Col span={6}>
            <div className="navbar-logo">MyWebsite</div>
          </Col>

          {/* Center: Menu */}
          <Col span={12}>
            <Menu
              mode="horizontal"
              className="navbar-menu"
              items={[
                { key: "home", label: "Home" },
                { key: "about", label: "About" },
                { key: "blog", label: "Blog" },
                { key: "contact", label: "Contact Us" },
              ]}
            />
          </Col>

          {/* Right: Button */}
          <Col span={6} className="navbar-actions">
            <Button type="primary" className="navbar-btn">
              Create Account
            </Button>
          </Col>
        </Row>
      </Header>
    </Layout>
  );
};

export default Navbar;
