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
  DatePicker,
  InputNumber,
  Tag,
  Space,
} from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import Header from "../../Components/Header/Header";

const Exams = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [exams, setExams] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [form] = Form.useForm();

  const subjects = JSON.parse(localStorage.getItem("subjects")) || [];
  const teachers = JSON.parse(localStorage.getItem("teachers")) || [];
  const lectures = JSON.parse(localStorage.getItem("lectures")) || [];
  const students = JSON.parse(localStorage.getItem("students")) || [];

  useEffect(() => {
    const storedExams = JSON.parse(localStorage.getItem("exams")) || [];
    setExams(storedExams);
  }, []);

  useEffect(() => {
    localStorage.setItem("exams", JSON.stringify(exams));
  }, [exams]);

  const getNextId = (items) => {
    if (!items || items.length === 0) return 1;
    const maxId = Math.max(...items.map((it) => Number(it.id || 0)));
    return maxId + 1;
  };

  const handleSubjectChange = (value) => {
    setSelectedSubject(value);

    // Find matching lecture
    const relatedLecture = lectures.find((lec) =>
      Array.isArray(lec.subject) ? lec.subject.includes(value) : lec.subject === value
    );

    // Find matching teacher
    const relatedTeacher = teachers.find((tch) =>
      Array.isArray(tch.subject) ? tch.subject.includes(value) : tch.subject === value
    );

    // Find matching students
    const relatedStudents =
      relatedLecture?.students?.length > 0 ? relatedLecture.students : [];

    // Autofill form
    form.setFieldsValue({
      lecture: relatedLecture ? relatedLecture.title : "",
      teacher: relatedTeacher ? relatedTeacher.name : "",
      students: relatedStudents,
    });
  };

  const handleExam = (values) => {
    const nextId = getNextId(exams);
    const marks = values.marks || {};

    // Calculate stats
    const totalMarks = Object.values(marks).reduce(
      (acc, m) => acc + (parseFloat(m) || 0),
      0
    );
    const totalStudents = Object.keys(marks).length;
    const avgMarks =
      totalStudents > 0 ? (totalMarks / totalStudents).toFixed(2) : 0;

    let passCount = 0;
    let failCount = 0;
    Object.values(marks).forEach((mark) => {
      if (mark >= 33) passCount++;
      else failCount++;
    });

    const newExam = {
      ...values,
      id: nextId,
      key: nextId,
      totalStudents,
      averageMarks: avgMarks,
      passCount,
      failCount,
      date: values.date ? values.date.format("YYYY-MM-DD") : "",
    };

    setExams([...exams, newExam]);
    setModalVisible(false);
    form.resetFields();
  };

  const handleDelete = (id) => {
    const updated = exams.filter((exam) => exam.id !== id);
    setExams(updated);
  };

  const columns = [
    { title: "Exam Name", dataIndex: "examName", key: "examName" },
    {
      title: "Lecture",
      dataIndex: "lecture",
      key: "lecture",
      render: (text) =>
        text ? <Tag color="purple">{text}</Tag> : <Tag color="default">N/A</Tag>,
    },
    {
      title: "Teacher",
      dataIndex: "teacher",
      key: "teacher",
      render: (text) =>
        text ? <Tag color="green">{text}</Tag> : <Tag color="default">N/A</Tag>,
    },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Total Students", dataIndex: "totalStudents", key: "totalStudents" },
    { title: "Average Marks", dataIndex: "averageMarks", key: "averageMarks" },
    {
      title: "Pass",
      dataIndex: "passCount",
      key: "passCount",
      render: (text) => <Tag color="blue">{text}</Tag>,
    },
    {
      title: "Fail",
      dataIndex: "failCount",
      key: "failCount",
      render: (text) => <Tag color="red">{text}</Tag>,
    },
    {
      title: "Student Marks",
      dataIndex: "marks",
      key: "marks",
      render: (marks) =>
        marks ? (
          <Space size={[0, 4]} wrap>
            {Object.entries(marks).map(([student, mark]) => (
              <Tag
                key={student}
                color={mark >= 33 ? "green" : "red"}
                style={{ fontWeight: 500 }}
              >
                {student}: {mark}
              </Tag>
            ))}
          </Space>
        ) : (
          ""
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
            <Dropdown placement="bottomRight" trigger={["click"]}>
              <Avatar
                style={{ backgroundColor: "purple", cursor: "pointer" }}
                icon={<UserOutlined />}
              />
            </Dropdown>
          </div>
        </Header>

        <div>
          <Card
            style={{ margin: "10px" }}
            title="Exams List"
            extra={<Button onClick={() => setModalVisible(true)}>Create Exam</Button>}
          >
            <Table dataSource={exams} columns={columns} />
          </Card>
        </div>
      </Layout>

      <Modal
        title="Create Exam"
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={false}
        width={700}
      >
        <Form form={form} onFinish={handleExam} layout="vertical">
          <Form.Item name="examName" label="Exam Name" rules={[{ required: true }]}>
            <Select placeholder="Select Subject" onChange={handleSubjectChange}>
              {subjects.map((item) => (
                <Select.Option key={item.id} value={item.name}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="lecture" label="Lecture">
            {form.getFieldValue("lecture") ? (
              <Tag color="purple" style={{ padding: "5px 10px" }}>
                {form.getFieldValue("lecture")}
              </Tag>
            ) : (
              <Input disabled />
            )}
          </Form.Item>

          <Form.Item name="teacher" label="Teacher">
            {form.getFieldValue("teacher") ? (
              <Tag color="green" style={{ padding: "5px 10px" }}>
                {form.getFieldValue("teacher")}
              </Tag>
            ) : (
              <Input disabled />
            )}
          </Form.Item>

          <Form.Item name="students" label="Students">
            {form.getFieldValue("students")?.length > 0 ? (
              <Space size={[0, 8]} wrap>
                {form
                  .getFieldValue("students")
                  .map((stu) => (
                    <Tag key={stu} color="blue" style={{ padding: "5px 10px" }}>
                      {stu}
                    </Tag>
                  ))}
              </Space>
            ) : (
              <Select mode="multiple" placeholder="Auto filled students" disabled />
            )}
          </Form.Item>

          <Form.Item name="date" label="Date" rules={[{ required: true }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Enter Student Marks" name="marks">
            {form.getFieldValue("students") &&
              form.getFieldValue("students").map((student) => (
                <Form.Item key={student} label={student} name={["marks", student]}>
                  <InputNumber min={0} max={100} placeholder="Enter marks" />
                </Form.Item>
              ))}
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default Exams;