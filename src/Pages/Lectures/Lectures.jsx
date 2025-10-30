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
  DatePicker,
  Select,
  Tag,
} from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import Header from "../../Components/Header/Header";

const Lectures = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [lectures, setLectures] = useState([]);

  const getAllLectures = JSON.parse(localStorage.getItem("lectures"));
  const getAllSubjects = JSON.parse(localStorage.getItem("subjects"));
  const [subjects, setSubjects] = useState(getAllSubjects || []);
  const getAllTeachers = JSON.parse(localStorage.getItem("teachers"));
  const [teachers, setTeachers] = useState(getAllTeachers || []);
  const getAllStudents = JSON.parse(localStorage.getItem("students"));
  const [students, setStudents] = useState(getAllStudents || []);

  useEffect(() => {
    const storedLectures = JSON.parse(localStorage.getItem("lectures")) || [];
    setLectures(storedLectures);
  }, []);

  useEffect(() => {
    localStorage.setItem("lectures", JSON.stringify(lectures));
  }, [lectures]);

  const getNextId = (items) => {
    if (!items || items.length === 0) return 1;
    const maxId = Math.max(...items.map((it) => Number(it.id || 0)));
    return maxId + 1;
  };

  const handleLecture = (values) => {
    const nextId = getNextId(lectures);
    const newLecture = {
      ...values,
      id: nextId,
      key: nextId,
      date: values.date ? values.date.format("YYYY-MM-DD") : "",
    };
    setLectures([...lectures, newLecture]);
    setModalVisible(false);
  };

  const handleDelete = (id) => {
    const updatedLectures = lectures.filter((lecture) => lecture.id !== id);
    setLectures(updatedLectures);
  };

  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Teacher", dataIndex: "teacher", key: "teacher" },
    {
      title: "Students",
      dataIndex: "students",
      key: "students",
      render: (students) =>
        students && students.length > 0 ? (
          students.map((stu, index) => (
            <Tag
              color={["green", "blue", "geekblue", "purple", "cyan"][index % 5]}
              key={index}
            >
              {stu}
            </Tag>
          ))
        ) : (
          <Tag color="default">No Students</Tag>
        ),
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      render: (subjects) =>
        subjects && subjects.length > 0 ? (
          subjects.map((sub, index) => (
            <Tag
              color={["magenta", "orange", "cyan", "blue", "purple"][index % 5]}
              key={index}
            >
              {sub}
            </Tag>
          ))
        ) : (
          <Tag color="default">No Subjects</Tag>
        ),
    },
    { title: "Date", dataIndex: "date", key: "date" },
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
            <div
              style={{ fontSize: "22px", color: "purple", fontWeight: "bold" }}
            >
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

        <div>
          <Card
            style={{ margin: "20px" }}
            title="Lectures List"
            extra={<Button onClick={() => setModalVisible(true)}>Create Lecture</Button>}
          >
            <Table
              dataSource={lectures}
              columns={columns}
              rowKey="id"
              pagination={{ pageSize: 5 }}
            />
          </Card>
        </div>
      </Layout>

      <Modal
        title="Create Lecture"
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={false}
      >
        <Form onFinish={handleLecture} layout="vertical">
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input placeholder="Enter Title" />
          </Form.Item>

          <Form.Item name="teacher" label="Teacher" rules={[{ required: true }]}>
            <Select placeholder="Select Teacher">
              {teachers.map((item) => (
                <Select.Option key={item.id} value={item.name}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="students" label="Students" rules={[{ required: true }]}>
            <Select mode="multiple" placeholder="Select Students">
              {students.map((item) => (
                <Select.Option key={item.id} value={item.name}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="subject" label="Subject" rules={[{ required: true }]}>
            <Select mode="multiple" placeholder="Select Subject">
              {subjects.map((item) => (
                <Select.Option key={item.id} value={item.name}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="date" label="Date" rules={[{ required: true }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default Lectures;
