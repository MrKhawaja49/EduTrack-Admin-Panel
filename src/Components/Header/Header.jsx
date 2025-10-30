import { Col, Row, Flex, Tag } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("user-token");
    window.location.pathname = "/login";
  }

  return (
    <div className="headerWrapper">
      <Row align="middle" justify="space-between" className="headerContainer">
        {/* Left Side: App Title */}
        <Col className="headerLeft" span={10}>
          <Flex align="center" gap={10}>
            <h2 className="appTitle">EduTrack Admin Panel</h2>
          </Flex>
        </Col>

        {/* Right Side: Navigation Tags */}
        <Col className="headerRight" span={14}>
          <Flex justify="end" align="center" gap={15}>
            <Tag
              color="blue"
              className="navTag"
              onClick={() => navigate("/")}
            >
              Subjects
            </Tag>
            <Tag
              color="geekblue"
              className="navTag"
              onClick={() => navigate("/students")}
            >
              Students
            </Tag>
            <Tag
              color="cyan"
              className="navTag"
              onClick={() => navigate("/teachers")}
            >
              Teachers
            </Tag>
            <Tag
              color="purple"
              className="navTag"
              onClick={() => navigate("/lectures")}
            >
              Lectures
            </Tag>
            <Tag
              color="green"
              className="navTag"
              onClick={() => navigate("/exams")}
            >
              Exams
            </Tag>
            <Tag color="red" className="navTag logoutTag" onClick={handleLogout}>
              Logout
            </Tag>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
