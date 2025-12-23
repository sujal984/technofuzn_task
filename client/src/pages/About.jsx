import { Helmet } from "react-helmet";
import { Button, Card, Row, Col, Timeline, Space } from "antd";
import {
  ArrowRightOutlined,
  TeamOutlined,
  RocketOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About - Technofuzn Task Management</title>
        <meta
          name="description"
          content="Learn about Technofuzn Task Management system, our mission and vision"
        />
        <meta property="og:title" content="About Us - Technofuzn Task" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Hero Section */}
        <div className="bg-white shadow-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                About Technofuzn
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                A modern, industry-level task management solution designed for
                professionals and teams
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Mission & Vision */}
          <Row gutter={[32, 32]} className="mb-16">
            <Col xs={24} md={12}>
              <Card className="shadow-lg border-0 h-full">
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: "100%" }}
                >
                  <RocketOutlined
                    style={{ fontSize: "48px", color: "#0891b2" }}
                  />
                  <h2 className="text-2xl font-bold text-slate-800">
                    Our Mission
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    To provide a simple yet powerful task management platform
                    that helps individuals and teams organize, prioritize, and
                    complete their work efficiently.
                  </p>
                </Space>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card className="shadow-lg border-0 h-full">
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: "100%" }}
                >
                  <CheckCircleOutlined
                    style={{ fontSize: "48px", color: "#059669" }}
                  />
                  <h2 className="text-2xl font-bold text-slate-800">
                    Our Vision
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    To become the go-to platform for task management, offering
                    intuitive features, seamless collaboration, and exceptional
                    user experience.
                  </p>
                </Space>
              </Card>
            </Col>
          </Row>

          {/* Features */}
          <Card className="shadow-lg border-0 mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">
              Key Features
            </h2>
            <Row gutter={[32, 32]}>
              {[
                {
                  icon: "🎯",
                  title: "Smart Organization",
                  desc: "Organize tasks with advanced filtering, search, and sorting capabilities",
                },
                {
                  icon: "⚡",
                  title: "Lightning Fast",
                  desc: "Real-time updates and instant synchronization across all devices",
                },
                {
                  icon: "🔐",
                  title: "Secure & Reliable",
                  desc: "Enterprise-grade security with encrypted data storage",
                },
                {
                  icon: "📱",
                  title: "Fully Responsive",
                  desc: "Works seamlessly on desktop, tablet, and mobile devices",
                },
                {
                  icon: "🎨",
                  title: "Beautiful UI",
                  desc: "Modern, clean interface designed for optimal user experience",
                },
                {
                  icon: "🔄",
                  title: "Seamless Integration",
                  desc: "Easy integration with your favorite tools and services",
                },
              ].map((feature, idx) => (
                <Col xs={24} sm={12} lg={8} key={idx}>
                  <div className="text-center p-6 rounded-lg hover:bg-slate-50 transition-colors">
                    <div style={{ fontSize: "48px", marginBottom: "16px" }}>
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm">{feature.desc}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Card>

          {/* Development Journey */}
          <Card className="shadow-lg border-0 mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">
              Development Journey
            </h2>
            <Timeline
              items={[
                {
                  children: (
                    <p>
                      <strong>V1.0 - Initial Release</strong>
                      <br />
                      Basic CRUD operations for task management
                    </p>
                  ),
                },
                {
                  children: (
                    <p>
                      <strong>V2.0 - Enhanced Features</strong>
                      <br />
                      Added search, filtering, and advanced sorting
                    </p>
                  ),
                },
                {
                  children: (
                    <p>
                      <strong>V3.0 - Current Release</strong>
                      <br />
                      Modern UI, improved performance, multi-page layout, SEO
                      optimization
                    </p>
                  ),
                },
                {
                  children: (
                    <p>
                      <strong>V4.0 - Upcoming</strong>
                      <br />
                      Team collaboration, real-time sync, and mobile app
                    </p>
                  ),
                },
              ]}
            />
          </Card>

          {/* Tech Stack */}
          <Card className="shadow-lg border-0 mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">
              Technology Stack
            </h2>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} lg={6}>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-slate-800 mb-2">Frontend</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• React 19</li>
                    <li>• React Router v7</li>
                    <li>• Tailwind CSS</li>
                    <li>• Ant Design</li>
                  </ul>
                </div>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <div className="bg-cyan-50 p-6 rounded-lg">
                  <h3 className="font-bold text-slate-800 mb-2">Backend</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Node.js</li>
                    <li>• Express.js</li>
                    <li>• MongoDB</li>
                    <li>• CORS</li>
                  </ul>
                </div>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-bold text-slate-800 mb-2">Tools</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Vite</li>
                    <li>• ESLint</li>
                    <li>• Axios</li>
                    <li>• React Helmet</li>
                  </ul>
                </div>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-bold text-slate-800 mb-2">DevOps</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Git</li>
                    <li>• npm</li>
                    <li>• Responsive Design</li>
                    <li>• PWA Ready</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Card>

          {/* CTA */}
          <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
            <div className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg mb-8 opacity-90">
                Experience the power of modern task management
              </p>
              <Link to="/dashboard">
                <Button
                  size="large"
                  style={{
                    backgroundColor: "white",
                    color: "#0891b2",
                    border: "none",
                    fontWeight: "bold",
                  }}
                  icon={<ArrowRightOutlined />}
                >
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
