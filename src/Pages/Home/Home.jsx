// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Layout, Menu, Button, Row, Col, Card } from "antd";

// const { Header, Content, Footer } = Layout;

// const Home = () => {
//   const navigate = useNavigate();
//   return (
//     <Layout>
//       {/* Navbar */}
//       <Header style={{ background: "white" }}>
//         <img style={{width: "40px", marginLeft: "10px"}} src="/Images/logo.png" alt="" />
//         <div
//           style={{
//             float: "left",
//             fontSize: "22px",
//             color: "purple",
//             fontWeight: "bold",
//           }}
//         >
//           Time2Treat
//         </div>
//         <Menu
//           mode="horizontal"
//           style={{
//             float: "right",
//             flex: 2,
//             textAlign: "right",
//             background: "#fff",
//             borderBottom: "none",
//           }}
//         >
//           <Menu.Item key="home">
//             <Link to="/">Home</Link>
//           </Menu.Item>
//           <Menu.Item key="about">
//             <Link to="/about">About</Link>
//           </Menu.Item>
//           <Menu.Item key="profile">
//             <Link to="/profile">Profile</Link>
//           </Menu.Item>
//           <Menu.Item key="login">
//             <Link to="/login">Login</Link>
//           </Menu.Item>
//           <Menu.Item key="signup">
//             <Link to="/signup">Signup</Link>
//           </Menu.Item>
//         </Menu>
//       </Header>

//       <Content>
//         {/* Hero Section */}
//         <div
//           style={{
//             background: "purple",
//             padding: "80px 20px",
//             textAlign: "left",
//             color: "white",
//           }}
//         >
//           <Row gutter={24} align="middle" justify="center">
//             <Col xs={24} md={12}>
//               <h1
//                 style={{
//                   fontSize: "36px",
//                   fontWeight: "bold",
//                   margin: "20px 0",
//                 }}
//               >
//                 Book Appointments with Ease
//               </h1>
//               <p style={{ fontSize: "16px", margin: "25px 0" }}>
//                 Your health deserves priority. Connect with top doctors and
//                 specialists in just a few clicks.
//               </p>
//               <Link to="/signup">
//                 <Button
//                   type="primary"
//                   size="large"
//                   style={{
//                     background: "white",
//                     color: "purple",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Get Started
//                 </Button>
//               </Link>
//             </Col>
//             <Col xs={24} md={12}>
//               <img
//                 src="/Images/hero.png"
//                 alt="Booking Illustration"
//                 style={{ width: "100%", maxWidth: "900px" }}
//               />
//             </Col>
//           </Row>
//         </div>

//         {/* Find by Speciality */}
//         <div style={{ padding: "60px 20px", textAlign: "center" }}>
//           <h2>Find by Speciality</h2>
//           <p>Search for doctors based on their field of expertise.</p>
//           <Row gutter={[24, 24]} justify="center">
//             <Col xs={24} sm={12} md={8} lg={4}>
//               <Card
//                 cover={
//                   <img
//                     src="/Images/female-doctor.png"
//                     alt="general"
//                     style={{
//                       display: "block",
//                       padding: "10px",
//                       margin: "0 auto",
//                       width: "120px",
//                       height: "auto",
//                     }}
//                   />
//                 }
//                 bordered={false}
//               >
//                 <h3 style={{ textAlign: "center" }}>General physician</h3>
//               </Card>
//             </Col>
//             <Col xs={24} sm={12} md={8} lg={4}>
//               <Card
//                 cover={
//                   <img
//                     src="./Images/neurodevelopment.png"
//                     alt="neuro"
//                     style={{
//                       display: "block",
//                       margin: "0 auto",
//                       padding: "10px",
//                       width: "120px",
//                       height: "auto",
//                     }}
//                   />
//                 }
//                 bordered={false}
//               >
//                 <h3 style={{ textAlign: "center" }}>Neurologist</h3>
//               </Card>
//             </Col>
//             <Col xs={24} sm={12} md={8} lg={4}>
//               <Card
//                 cover={
//                   <img
//                     src="/Images/reporter.png"
//                     alt="derma"
//                     style={{
//                       display: "block",
//                       margin: "0 auto",
//                       padding: "10px",
//                       width: "120px",
//                       height: "auto",
//                     }}
//                   />
//                 }
//                 bordered={false}
//               >
//                 <h3 style={{ textAlign: "center" }}>Dermatologist</h3>
//               </Card>
//             </Col>
//             <Col xs={24} sm={12} md={8} lg={4}>
//               <Card
//                 cover={
//                   <img
//                     src="/Images/fetus.png"
//                     alt="gyn"
//                     style={{
//                       display: "block",
//                       margin: "0 auto",
//                       padding: "10px",
//                       width: "120px",
//                       height: "auto",
//                     }}
//                   />
//                 }
//                 bordered={false}
//               >
//                 <h3 style={{ textAlign: "center" }}>Gynecologist</h3>
//               </Card>
//             </Col>
//             <Col xs={24} sm={12} md={8} lg={4}>
//               <Card
//                 cover={
//                   <img
//                     src="/Images/head.png"
//                     alt="pedi"
//                     style={{
//                       display: "block",
//                       margin: "0px auto",
//                       padding: "10px",
//                       width: "120px",
//                       height: "auto",
//                     }}
//                   />
//                 }
//                 bordered={false}
//               >
//                 <h3 style={{ textAlign: "center" }}>Pediatricians</h3>
//               </Card>
//             </Col>
//           </Row>
//         </div>

//         {/* Top Doctors */}
//         <div
//           style={{
//             background: "#fafafa",
//             padding: "60px 20px",
//             textAlign: "center",
//           }}
//         >
//           <h2>Top Doctors to Book</h2>
//           <p>Meet the most trusted doctors in your city.</p>
//           <Row gutter={24} justify="center">
//             <Col xs={24} sm={8}>
//               <Card
//                 cover={<img alt="doctor1" src="/Images/doc1.png" />}
//                 bordered={false}
//               >
//                 <h3>Dr. Sarah Khan</h3>
//                 <p>Cardiologist</p>
//               </Card>
//             </Col>
//             <Col xs={24} sm={8}>
//               <Card
//                 cover={<img alt="doctor2" src="/Images/doc2.png" />}
//                 bordered={false}
//               >
//                 <h3>Dr. Ahmed Ali</h3>
//                 <p>Dentist</p>
//               </Card>
//             </Col>
//             <Col xs={24} sm={8}>
//               <Card
//                 cover={<img alt="doctor3" src="/Images/doc5.png" />}
//                 bordered={false}
//               >
//                 <h3>Dr. Maria Sheikh</h3>
//                 <p>Dermatologist</p>
//               </Card>
//             </Col>
//           </Row>
//         </div>

//         {/* Appointment Info */}
//         <div
//           style={{
//             padding: "60px 20px",
//             textAlign: "center",
//             backgroundColor: "purple",
//           }}
//         >
//           <Row gutter={24} align="middle" justify="center">
//             <Col xs={24} md={12}>
//               <img
//                 src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc9.png"
//                 alt="appointment"
//                 style={{ width: "100%", maxWidth: "400px" }}
//               />
//             </Col>
//             <Col xs={24} md={12}>
//               <h2 style={{ color: "white" }}>Book Appointment</h2>
//               <p style={{ color: "white" }}>
//                 With 100+ trusted doctors across different fields, you can book
//                 appointments instantly and at your convenience.
//               </p>
//               <Link to="/signup">
//                 <Button
//                   type="primary"
//                   size="large"
//                   style={{
//                     background: "white",
//                     color: "purple",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Get Started
//                 </Button>
//               </Link>
//             </Col>
//           </Row>
//         </div>
//       </Content>

//       {/* Footer */}
//       <Footer
//         style={{
//           //   backgroundColor: "#001529",
//           color: "#fff",
//           padding: "60px 20px",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "space-between",
//             maxWidth: "1200px",
//             margin: "0 auto",
//           }}
//         >
//           {/* About Section */}
//           <div style={{ flex: "1 1 300px", marginBottom: "20px" }}>
//             <h3 style={{ color: "purple", fontWeight: "bold" }}>
//               About Time2Treat
//             </h3>
//             <p style={{ color: "#000000ff", lineHeight: "1.6" }}>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book.
//             </p>
//           </div>

//           {/* Company Links */}
//           <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
//             <h3
//               style={{
//                 color: "purple",
//                 fontWeight: "bold",
//                 marginLeft: "80px",
//               }}
//             >
//               COMPANY
//             </h3>
//             <ul
//               style={{
//                 listStyle: "none",
//                 padding: 0,
//                 color: "#000000ff",
//                 marginLeft: "80px",
//               }}
//             >
//               <li>Home</li>
//               <li>About Us</li>
//               <li>Delivery</li>
//               <li>Privacy Policy</li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
//             <h3 style={{ color: "purple", fontWeight: "bold" }}>
//               GET IN TOUCH
//             </h3>
//             <p style={{ color: "#000000ff", marginBottom: "5px" }}>
//               +0-000-000-000
//             </p>
//             <p style={{ color: "#000000ff" }}>greatstackdev@gmail.com</p>
//           </div>
//         </div>

//         <div
//           style={{
//             textAlign: "center",
//             marginTop: "40px",
//             color: "purple",
//             fontWeight: "bold",
//           }}
//         >
//           &copy; {new Date().getFullYear()} Time2Treat. All Rights Reserved By
//           Khawaja Hassan.
//         </div>
//       </Footer>
//     </Layout>
//   );
// };

// export default Home;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout, Menu, Button, Row, Col, Card, Dropdown, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Header from "../../Components/Header/Header";

const { Content, Footer } = Layout;

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Redirect to signup page after logout
    navigate("/signup");
    localStorage.removeItem("user-token")
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
        {/* Logo + Title */}
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

        {/* Menu */}
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

        {/* : User Dropdown */}
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

      <Content>
        {/* Hero Section */}
        <div
          style={{
            background: "purple",
            padding: "80px 20px",
            textAlign: "left",
            color: "white",
          }}
        >
          <Row gutter={24} align="middle" justify="center">
            <Col xs={24} md={12}>
              <h1
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  margin: "20px 0",
                }}
              >
                Book Appointments with Ease
              </h1>
              <p style={{ fontSize: "16px", margin: "25px 0" }}>
                Your health deserves priority. Connect with top doctors and
                specialists in just a few clicks.
              </p>
              <Link to="/signup">
                <Button
                  type="primary"
                  size="large"
                  style={{
                    background: "white",
                    color: "purple",
                    fontWeight: "bold",
                  }}
                >
                  Get Started
                </Button>
              </Link>
            </Col>
            <Col xs={24} md={12}>
              <img
                src="/Images/hero.png"
                alt="Booking Illustration"
                style={{ width: "100%", maxWidth: "900px" }}
              />
            </Col>
          </Row>
        </div>

        {/* Find by Speciality */}
        <div style={{ padding: "60px 20px", textAlign: "center" }}>
          <h2>Find by Speciality</h2>
          <p>Search for doctors based on their field of expertise.</p>
          <Row gutter={[24, 24]} justify="center">
            <Col xs={24} sm={12} md={8} lg={4}>
              <Card
                cover={
                  <img
                    src="/Images/female-doctor.png"
                    alt="general"
                    style={{
                      display: "block",
                      padding: "10px",
                      margin: "0 auto",
                      width: "120px",
                      height: "auto",
                    }}
                  />
                }
                bordered={false}
              >
                <h3 style={{ textAlign: "center" }}>General physician</h3>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={4}>
              <Card
                cover={
                  <img
                    src="./Images/neurodevelopment.png"
                    alt="neuro"
                    style={{
                      display: "block",
                      margin: "0 auto",
                      padding: "10px",
                      width: "120px",
                      height: "auto",
                    }}
                  />
                }
                bordered={false}
              >
                <h3 style={{ textAlign: "center" }}>Neurologist</h3>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={4}>
              <Card
                cover={
                  <img
                    src="/Images/reporter.png"
                    alt="derma"
                    style={{
                      display: "block",
                      margin: "0 auto",
                      padding: "10px",
                      width: "120px",
                      height: "auto",
                    }}
                  />
                }
                bordered={false}
              >
                <h3 style={{ textAlign: "center" }}>Dermatologist</h3>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={4}>
              <Card
                cover={
                  <img
                    src="/Images/fetus.png"
                    alt="gyn"
                    style={{
                      display: "block",
                      margin: "0 auto",
                      padding: "10px",
                      width: "120px",
                      height: "auto",
                    }}
                  />
                }
                bordered={false}
              >
                <h3 style={{ textAlign: "center" }}>Gynecologist</h3>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8} lg={4}>
              <Card
                cover={
                  <img
                    src="/Images/head.png"
                    alt="pedi"
                    style={{
                      display: "block",
                      margin: "0px auto",
                      padding: "10px",
                      width: "120px",
                      height: "auto",
                    }}
                  />
                }
                bordered={false}
              >
                <h3 style={{ textAlign: "center" }}>Pediatricians</h3>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Top Doctors */}
        <div
          style={{
            background: "#fafafa",
            padding: "60px 20px",
            textAlign: "center",
          }}
        >
          <h2>Top Doctors to Book</h2>
          <p>Meet the most trusted doctors in your city.</p>
          <Row gutter={24} justify="center">
            <Col xs={24} sm={8}>
              <Card
                cover={<img alt="doctor1" src="/Images/doc1.png" />}
                bordered={false}
              >
                <h3>Dr. Sarah Khan</h3>
                <p>Cardiologist</p>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card
                cover={<img alt="doctor2" src="/Images/doc2.png" />}
                bordered={false}
              >
                <h3>Dr. Ahmed Ali</h3>
                <p>Dentist</p>
              </Card>
            </Col>
            <Col xs={24} sm={8}>
              <Card
                cover={<img alt="doctor3" src="/Images/doc5.png" />}
                bordered={false}
              >
                <h3>Dr. Maria Sheikh</h3>
                <p>Dermatologist</p>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Appointment Info */}
        <div
          style={{
            padding: "60px 20px",
            textAlign: "center",
            backgroundColor: "purple",
          }}
        >
          <Row gutter={24} align="middle" justify="center">
            <Col xs={24} md={12}>
              <img
                src="https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc9.png"
                alt="appointment"
                style={{ width: "100%", maxWidth: "400px" }}
              />
            </Col>
            <Col xs={24} md={12}>
              <h2 style={{ color: "white" }}>Book Appointment</h2>
              <p style={{ color: "white" }}>
                With 100+ trusted doctors across different fields, you can book
                appointments instantly and at your convenience.
              </p>
              <Link to="/signup">
                <Button
                  type="primary"
                  size="large"
                  style={{
                    background: "white",
                    color: "purple",
                    fontWeight: "bold",
                  }}
                >
                  Get Started
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </Content>

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

export default Home;
