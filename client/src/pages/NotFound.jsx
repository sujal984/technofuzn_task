import { Helmet } from "react-helmet";
import { Button, Result } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
        <Result
          status="404"
          title={
            <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Page Not Found
            </span>
          }
          subTitle="Sorry, the page you're looking for doesn't exist or has been moved."
          extra={
            <Link to="/">
              <Button
                type="primary"
                size="large"
                icon={<HomeOutlined />}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Back to Home
              </Button>
            </Link>
          }
        />
      </div>
    </>
  );
}
