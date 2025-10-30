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
  Popconfirm,
  Tag,
} from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import Header from "../../Components/Header/Header";

const Subjects = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const storedSubjects = localStorage.getItem("subjects");
    if (storedSubjects) {
      setSubjects(JSON.parse(storedSubjects));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects));
  }, [subjects]);

  const handleSubject = (values) => {
    const newId =
      subjects.length > 0 ? subjects[subjects.length - 1].id + 1 : 1;

    const newSubject = {
      ...values,
      id: newId,
      key: newId,
    };

    const updatedSubjects = [...subjects, newSubject];
    setSubjects(updatedSubjects);
    setModalVisible(false);
  };

  const handleDelete = (id) => {
    const updatedSubjects = subjects.filter((subject) => subject.id !== id);
    setSubjects(updatedSubjects);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => <Tag color="purple">{name}</Tag>,
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
      render: (level) => <Tag color="blue">{level}</Tag>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (desc) => <Tag color="geekblue">{desc}</Tag>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Popconfirm
          title="Are you sure you want to delete this subject?"
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
          title="Subjects List"
          extra={<Button onClick={() => setModalVisible(true)}>Create Subject</Button>}
        >
          <Table
            dataSource={subjects}
            columns={columns}
            pagination={{ pageSize: 5 }}
            style={{ borderRadius: "8px" }}
          />
        </Card>
      </div>

      <Modal
        title="Create Subject"
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={false}
      >
        <Form onFinish={handleSubject} layout="vertical">
          <Form.Item name="name" label="Subject Name" rules={[{ required: true }]}>
            <Input placeholder="Please Enter Subject Name" />
          </Form.Item>
          <Form.Item name="description" label="Description" rules={[{ required: true }]}>
            <Input placeholder="Please Enter Description" />
          </Form.Item>
          <Form.Item name="level" label="Level" rules={[{ required: true }]}>
            <Input type="number" placeholder="Please Enter Level" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form>
      </Modal>
    </Layout>
  );
};

export default Subjects;
