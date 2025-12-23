import { Helmet } from "react-helmet";
import { Button, Space, Card, Row, Col, Statistic } from "antd";
import {
  ArrowRightOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Technofuzn - Modern Task Management Platform</title>
        <meta
          name="description"
          content="A professional task management platform with modern UI, advanced features, and enterprise-level security"
        />
        <meta
          name="keywords"
          content="task management, productivity, todo, organization, team collaboration"
        />
        <meta property="og:title" content="Technofuzn - Task Management" />
        <meta
          property="og:description"
          content="Modern, professional task management platform"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Navbar */}
        <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Technofuzn
              </div>
              <Space size="large" className="text-white">
                <a href="#features" className="hover:text-cyan-400 transition">
                  Features
                </a>
                <a href="#stats" className="hover:text-cyan-400 transition">
                  Stats
                </a>
                <Link to="/about" className="hover:text-cyan-400 transition">
                  About
                </Link>
              </Space>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl font-bold text-white">
              Task Management
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Reimagined
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A modern, industry-level platform to organize, prioritize, and
              complete your work with unprecedented ease and efficiency
            </p>
            <Space size="large" className="justify-center">
              <Link to="/dashboard">
                <Button
                  size="large"
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 text-base"
                >
                  Get Started
                </Button>
              </Link>
              <a href="#features">
                <Button
                  size="large"
                  className="border-white/30 text-white hover:border-cyan-400 hover:text-cyan-400 px-8 h-12 text-base"
                >
                  Learn More
                </Button>
              </a>
            </Space>

            {/* Floating Cards Animation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
              {[
                { icon: "⚡", title: "Lightning Fast", desc: "Real-time sync" },
                { icon: "🔐", title: "Secure", desc: "Enterprise-grade" },
                { icon: "🎨", title: "Beautiful", desc: "Modern design" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 transition transform hover:scale-105"
                >
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div
          id="features"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Powerful Features for Your Success
          </h2>
          <Row gutter={[24, 24]}>
            {[
              {
                icon: "🎯",
                title: "Smart Organization",
                features: [
                  "Advanced filtering",
                  "Full-text search",
                  "Custom sorting",
                ],
              },
              {
                icon: "⚙️",
                title: "Customizable",
                features: [
                  "Flexible structure",
                  "Media support",
                  "Rich descriptions",
                ],
              },
              {
                icon: "📊",
                title: "Analytics",
                features: [
                  "Task metrics",
                  "Completion rates",
                  "Performance insights",
                ],
              },
              {
                icon: "🚀",
                title: "Performance",
                features: [
                  "Optimized speed",
                  "Efficient database",
                  "Minimal latency",
                ],
              },
              {
                icon: "📱",
                title: "Responsive Design",
                features: [
                  "Mobile friendly",
                  "Tablet optimized",
                  "Desktop enhanced",
                ],
              },
              {
                icon: "🔄",
                title: "Integration Ready",
                features: ["API available", "Webhook support", "Extensible"],
              },
            ].map((feature, idx) => (
              <Col xs={24} sm={12} lg={8} key={idx}>
                <Card
                  className="shadow-lg border-0 h-full hover:shadow-xl transition bg-white/10 backdrop-blur border border-white/20 text-white"
                  hoverable
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <ul className="space-y-2 text-slate-200 text-sm">
                    {feature.features.map((f, i) => (
                      <li key={i}>✓ {f}</li>
                    ))}
                  </ul>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Stats Section */}
        <div
          id="stats"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <Row gutter={[32, 32]}>
            {[
              { label: "Active Users", value: "10K+" },
              { label: "Tasks Created", value: "500K+" },
              { label: "Uptime", value: "99.9%" },
              { label: "Team Members", value: "Expert" },
            ].map((stat, idx) => (
              <Col xs={24} sm={12} lg={6} key={idx}>
                <div className="text-center p-8 bg-white/10 backdrop-blur border border-white/20 rounded-lg">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-300">{stat.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <Card className="shadow-2xl border-0 bg-gradient-to-r from-blue-600 to-cyan-600">
            <div className="py-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Transform Your Workflow?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start using Technofuzn today and experience the difference
                modern task management can make
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
                  Launch Dashboard
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/20 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold mb-4">Technofuzn</h3>
                <p className="text-slate-400 text-sm">
                  Modern task management for professionals
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>
                    <Link to="/" className="hover:text-cyan-400">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard" className="hover:text-cyan-400">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="hover:text-cyan-400">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Follow Us</h3>
                <Space size="middle" className="text-slate-400">
                  <GithubOutlined className="text-xl hover:text-cyan-400 cursor-pointer" />
                  <LinkedinOutlined className="text-xl hover:text-cyan-400 cursor-pointer" />
                  <MailOutlined className="text-xl hover:text-cyan-400 cursor-pointer" />
                </Space>
              </div>
            </div>
            <div className="border-t border-white/20 pt-8 text-center text-slate-400 text-sm">
              <p>
                © 2025 Technofuzn Task Management – sujal_7383. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
