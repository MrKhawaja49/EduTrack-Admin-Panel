import { Link } from "react-router-dom";
import { Layout, Menu, Button, Row, Col, Card } from "antd";

const { Header, Content, Footer } = Layout;

const About = () => {
  return (
    <Layout>
      {/* Navbar */}
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

      <h2
        style={{
          textAlign: "center",
          marginTop: "25px",
          fontWeight: "bold",
          color: "purple",
        }}
      >
        ABOUT US
      </h2>

      <Row
        gutter={10}
        align="middle"
        textAlign="center"
        justify="left"
        style={{ marginTop: "20px" }}
      >
        <Col xs={24} md={12}>
          <img
            src="https://prescripto.vercel.app/assets/about_image-MG9zrc7b.png"
            alt="appointment"
            style={{ width: "60%", maxWidth: "400px", marginLeft: "150px" }}
          />
        </Col>
        <Col xs={24} md={12}>
          <p
            style={{
              color: "gray",
              padding: "50px",
              fontSize: "13px",
              marginRight: "140px",
            }}
          >
            With 100+ trusted doctors across different fields, you can book
            appointments instantly and at your convenience.Welcome to
            Prescripto, your trusted partner in managing your healthcare needs
            conveniently and efficiently. At Time2Treat, we understand the
            challenges individuals face when it comes to scheduling doctor
            appointments and managing their health records. Prescripto is
            committed to excellence in healthcare technology. We continuously
            strive to enhance our platform, integrating the latest advancements
            to improve user experience and deliver superior service. Whether
            you're booking your first appointment or managing ongoing care,
            Prescripto is here to support you every step of the way.
            <h2
              style={{ color: "purple", marginTop: "15px", fontSize: "14px" }}
            >
              OUR VISION
            </h2>
            <p>
              Our vision at Time2Treat is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </p>
        </Col>
      </Row>
      <div style={{ padding: "20px", backgroundColor: "white" }}>
        <h2
          style={{
            // textAlign: "left",
            marginLeft: "120px",
            marginTop: "25px",
            fontWeight: "bold",
            color: "purple",
          }}
        >
          WHY CHOOSE US
        </h2>
        <Row gutter={16}>
          <Col span={8}>
            <div
              style={{
                backgroundColor: "purple",
                color: "white",
                padding: "20px",
                borderRadius: "4px",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>EFFICIENCY:</h3>
              <p>
                Streamlined appointment scheduling that fits into your busy
                lifestyle.
              </p>
            </div>
          </Col>
          <Col span={8}>
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                border: "1px solid #f0f0f0",
                borderRadius: "4px",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>CONVENIENCE:</h3>
              <p>
                Access to a network of trusted healthcare professionals in your
                area.
              </p>
            </div>
          </Col>
          <Col span={8}>
            <div
              style={{
                backgroundColor: "purple",
                padding: "20px",
                border: "1px solid #f0f0f0",
                borderRadius: "4px",
              }}
            >
              <h3 style={{ marginBottom: "10px", color: "white" }}>
                PERSONALIZATION:
              </h3>
              <p style={{ color: "white" }}>
                Tailored recommendations and reminders to help you stay on top
                of your health.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      {/* Footer */}
      <Footer
        style={{
          //   backgroundColor: "#001529",
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

export default About;
