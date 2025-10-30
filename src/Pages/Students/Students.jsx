import React, { useState, useEffect } from "react";
import {
  Layout,
  Card,
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Popconfirm,
  Menu,
  Dropdown,
  Avatar,
  Tag,
} from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import Header from "../../Components/Header/Header";

const Students = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const storedSubjects = localStorage.getItem("subjects");
    if (storedSubjects) setSubjects(JSON.parse(storedSubjects));
  }, []);

  useEffect(() => {
    const storedStudents = localStorage.getItem("students");
    if (storedStudents) setStudents(JSON.parse(storedStudents));
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const handleStudent = (values) => {
    const newId = students.length > 0 ? students[students.length - 1].id + 1 : 1;
    const newStudent = { ...values, id: newId, key: newId };
    setStudents([...students, newStudent]);
    setModalVisible(false);
  };

  const handleDelete = (id) => {
    const updatedStudents = students.filter((s) => s.id !== id);
    setStudents(updatedStudents);
  };

  const columns = [
    {
      title: "Student Name",
      dataIndex: "name",
      key: "name",
      render: (name) => <Tag color="purple">{name}</Tag>,
    },
    {
      title: "Roll No",
      dataIndex: "rollNo",
      key: "rollNo",
      render: (rollNo) => <Tag color="blue">{rollNo}</Tag>,
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      render: (subject) => <Tag color="green">{subject}</Tag>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Popconfirm
          title="Are you sure you want to delete this student?"
          onConfirm={() => handleDelete(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger>
            Delete
          </Button>
        </Popconfirm>
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
          <img style={{ width: "40px", marginRight: "10px" }} src="/Images/logo.png" alt="Logo" />
          <div style={{ fontSize: "22px", color: "purple", fontWeight: "bold" }}>Time2Treat</div>
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
            <Avatar style={{ backgroundColor: "purple", cursor: "pointer" }} icon={<UserOutlined />} />
          </Dropdown>
        </div>
      </Header>

      <div>
        <Card
          style={{
            margin: "20px",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
          title="Student List"
          extra={<Button onClick={() => setModalVisible(true)}>Create Student</Button>}
        >
          <Table
            dataSource={students}
            columns={columns}
            pagination={{ pageSize: 5 }}
            style={{ borderRadius: "8px" }}
          />
        </Card>
      </div>

      <Modal
        title="Add Student"
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={false}
      >
        <Form onFinish={handleStudent} layout="vertical">
          <Form.Item name="name" label="Student Name" rules={[{ required: true }]}>
            <Input placeholder="Enter Student Name" />
          </Form.Item>
          <Form.Item name="rollNo" label="Roll No" rules={[{ required: true }]}>
            <Input placeholder="Enter Roll Number" />
          </Form.Item>
          <Form.Item name="subject" label="Subject" rules={[{ required: true }]}>
            <Select placeholder="Select Subject">
              {subjects.map((subject) => (
                <Select.Option key={subject.id} value={subject.name}>
                  {subject.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form>
      </Modal>
    </Layout>
  );
};

export default Students;
