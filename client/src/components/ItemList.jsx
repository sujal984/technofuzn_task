import {
  Table,
  Button,
  Image,
  Space,
  Card,
  Empty,
  Tooltip,
  Popconfirm,
  Tag,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

export default function ItemList({ data, onEdit, onDelete }) {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: 200,
      render: (text) => (
        <Tooltip title={text}>
          <span className="font-semibold text-slate-800 truncate block">
            {text}
          </span>
        </Tooltip>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 250,
      render: (text) => (
        <Tooltip title={text || "No description"}>
          <span className="text-slate-600 line-clamp-2 flex items-center gap-2">
            {text ? (
              <>
                <FileTextOutlined className="text-blue-500" />
                <span>{text.substring(0, 50)}...</span>
              </>
            ) : (
              <span className="text-slate-400 italic">No description</span>
            )}
          </span>
        </Tooltip>
      ),
    },
    {
      title: "Media",
      dataIndex: "media",
      key: "media",
      width: 100,
      render: (url) =>
        url ? (
          <Tooltip title="Click to view">
            <Image
              width={60}
              height={60}
              src={url}
              alt="Media"
              className="rounded object-cover cursor-pointer"
              preview={{
                mask: <EyeOutlined />,
              }}
            />
          </Tooltip>
        ) : (
          <Tag color="default">No media</Tag>
        ),
    },
    {
      title: "Created Date",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 180,
      render: (date) => (
        <span className="text-slate-600">
          {new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      ),
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
    },
    {
      title: "Actions",
      key: "actions",
      width: 150,
      render: (_, record) => (
        <Space size="small">
          <Tooltip title="Edit item">
            <Button
              type="primary"
              size="small"
              icon={<EditOutlined />}
              onClick={() => onEdit(record)}
              className="bg-blue-600 hover:bg-blue-700"
            />
          </Tooltip>
          <Popconfirm
            title="Delete Item"
            description="Are you sure you want to delete this item?"
            onConfirm={() => onDelete(record._id)}
            okText="Yes"
            cancelText="No"
            okButtonProps={{ danger: true }}
          >
            <Tooltip title="Delete item">
              <Button danger size="small" icon={<DeleteOutlined />} />
            </Tooltip>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return data && data.length > 0 ? (
    <Card className="shadow-lg border-0">
      <Table
        rowKey="_id"
        columns={columns}
        dataSource={data}
        scroll={{ x: 1200 }}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => `Total ${total} items`,
          className: "mt-4",
        }}
        rowClassName="hover:bg-slate-50 transition"
      />
    </Card>
  ) : (
    <Card className="shadow-lg border-0">
      <Empty
        description="No items to display"
        style={{ marginTop: "40px", marginBottom: "40px" }}
      />
    </Card>
  );
}
