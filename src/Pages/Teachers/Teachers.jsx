import React, { useState, useEffect } from "react";
import {
  Card,
  Layout,
  Table,
  Menu,
  Dropdown,
  Avatar,
  Button,
  Form,
  Modal,
  Input,
  Select,
  Tag,
} from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import Header from "../../Components/Header/Header";

const Teachers = () => {
  const getAllSubjects = JSON.parse(localStorage.getItem("subjects"));
  const getAllTeachers = JSON.parse(localStorage.getItem("teachers"));
  const [modalVisible, setModalVisible] = useState(false);
  const [subjects, setSubjects] = useState(getAllSubjects || []);
  const [teachers, setTeachers] = useState(getAllTeachers || []);

  useEffect(() => {
    const storedTeachers = JSON.parse(localStorage.getItem("teachers")) || [];
    setTeachers(storedTeachers);
  }, []);

  useEffect(() => {
    localStorage.setItem("teachers", JSON.stringify(teachers));
  }, [teachers]);

  const handleTeacher = (values) => {
    const newId = teachers.length > 0 ? teachers[teachers.length - 1].id + 1 : 1;
    const newTeacher = { ...values, id: newId, key: newId };
    setTeachers([...teachers, newTeacher]);
    setModalVisible(false);
  };

  const handleDelete = (id) => {
    const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);
    setTeachers(updatedTeachers);
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Subjects",
      dataIndex: "subject",
      key: "subject",
      render: (subjects) =>
        subjects && subjects.length > 0 ? (
          subjects.map((sub, index) => (
            <Tag
              color={["blue", "green", "purple", "magenta", "cyan"][index % 5]}
              key={index}
            >
              {sub}
            </Tag>
          ))
        ) : (
          <Tag color="default">No Subjects</Tag>
        ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button danger onClick={() => handleDelete(record.id)}>
          Delete
        </Button>
      ),
    },
  ];

  const userMenu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/settings">Settings</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/logout">Logout</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Layout>
        <Header
          style={{
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 40px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ width: "40px", marginRight: "10px" }}
              src="/Images/logo.png"
              alt="Logo"
            />
            <div style={{ fontSize: "22px", color: "purple", fontWeight: "bold" }}>
              Time2Treat
            </div>
          </div>

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

          <div>
            <Dropdown overlay={userMenu} placement="bottomRight" trigger={["click"]}>
              <Avatar
                style={{ backgroundColor: "purple", cursor: "pointer" }}
                icon={<UserOutlined />}
              />
            </Dropdown>
          </div>
        </Header>

        <div>
          <Card
            style={{ margin: "20px" }}
            title="Teachers List"
            extra={<Button onClick={() => setModalVisible(true)}>Add Teacher</Button>}
          >
            <Table
              dataSource={teachers}
              columns={columns}
              rowKey="id"
              pagination={{ pageSize: 5 }}
            />
          </Card>
        </div>
      </Layout>

      <Modal
        title="Add Teacher"
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={false}
      >
        <Form onFinish={handleTeacher} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input placeholder="Enter Teacher Name" />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
            <Input placeholder="Enter Teacher Email" />
          </Form.Item>
          <Form.Item name="subject" label="Subjects" rules={[{ required: true }]}>
            <Select placeholder="Please select subjects" mode="multiple">
              {subjects.map((item) => (
                <Select.Option value={item.name} key={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default Teachers;
