import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  Button,
  Space,
  Input,
  Tag,
  Empty,
  Spin,
  Card,
  Row,
  Col,
  Statistic,
  message,
} from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { api } from "../services/api";
import ItemForm from "../components/ItemForm";
import ItemList from "../components/ItemList";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const loadItems = async () => {
    try {
      setLoading(true);
      const res = await api.get("/items");
      setItems(res.data || []);
    } catch (error) {
      message.error("Failed to load items");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const filteredItems = items
    .filter(
      (item) =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "newest")
        return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === "oldest")
        return new Date(a.createdAt) - new Date(b.createdAt);
      if (sortBy === "title") return a.title.localeCompare(b.title);
      return 0;
    });

  const submitItem = async (data) => {
    try {
      if (editing) {
        await api.put(`/items/${editing._id}`, data);
        message.success("Item updated successfully");
      } else {
        await api.post("/items", {
          ...data,
          title: `${data.title} – sujal_7383`,
        });
        message.success("Item created successfully");
      }
      setOpen(false);
      setEditing(null);
      loadItems();
    } catch (error) {
      message.error(
        editing ? "Failed to update item" : "Failed to create item"
      );
      console.error(error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await api.delete(`/items/${id}`);
      message.success("Item deleted successfully");
      loadItems();
    } catch (error) {
      message.error("Failed to delete item");
      console.error(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Dashboard - Technofuzn Task Management</title>
        <meta
          name="description"
          content="Manage your items efficiently with our modern task management system"
        />
        <meta property="og:title" content="Dashboard - Technofuzn Task" />
        <meta property="og:description" content="Task Management Dashboard" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Header */}
        <div className="bg-white shadow-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Task Dashboard
                </h1>
                <p className="text-slate-500 mt-2">
                  Manage and organize your items efficiently
                </p>
              </div>
              <Button
                type="primary"
                size="large"
                icon={<PlusOutlined />}
                onClick={() => {
                  setEditing(null);
                  setOpen(true);
                }}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Add New Item
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={6}>
              <Card className="shadow-lg border-0">
                <Statistic
                  title="Total Items"
                  value={items.length}
                  valueStyle={{ color: "#1f2937", fontSize: "28px" }}
                  prefix={<span className="text-2xl">📦</span>}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card className="shadow-lg border-0">
                <Statistic
                  title="Items Found"
                  value={filteredItems.length}
                  valueStyle={{ color: "#0891b2", fontSize: "28px" }}
                  prefix={<span className="text-2xl">🔍</span>}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card className="shadow-lg border-0">
                <Statistic
                  title="Completion Rate"
                  value={(
                    (filteredItems.length / Math.max(items.length, 1)) *
                    100
                  ).toFixed(0)}
                  valueStyle={{ color: "#059669", fontSize: "28px" }}
                  suffix="%"
                  prefix={<span className="text-2xl">✅</span>}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card className="shadow-lg border-0">
                <Statistic
                  title="Last Updated"
                  value={items.length > 0 ? "Just now" : "No items"}
                  valueStyle={{ color: "#7c3aed", fontSize: "16px" }}
                  prefix={<span className="text-2xl">⏱️</span>}
                />
              </Card>
            </Col>
          </Row>
        </div>

        {/* Filters & Search */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Card className="shadow-lg border-0">
            <Space direction="vertical" style={{ width: "100%" }} size="large">
              <Space wrap style={{ width: "100%" }}>
                <Input
                  placeholder="Search items by title or description..."
                  prefix={<SearchOutlined />}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ width: "300px" }}
                  className="rounded"
                />

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="title">Title (A-Z)</option>
                </select>

                <Button
                  icon={<ReloadOutlined />}
                  onClick={loadItems}
                  loading={loading}
                >
                  Refresh
                </Button>
              </Space>

              <div className="flex gap-2 flex-wrap">
                {searchTerm && (
                  <Tag closable onClose={() => setSearchTerm("")} color="blue">
                    Search: {searchTerm}
                  </Tag>
                )}
              </div>
            </Space>
          </Card>
        </div>

        {/* Items List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Spin spinning={loading}>
            {filteredItems.length === 0 ? (
              <Card className="shadow-lg border-0">
                <Empty
                  description={
                    searchTerm ? "No items match your search" : "No items yet"
                  }
                  style={{ marginTop: "40px", marginBottom: "40px" }}
                >
                  <Button
                    type="primary"
                    onClick={() => {
                      setEditing(null);
                      setOpen(true);
                    }}
                  >
                    Create First Item
                  </Button>
                </Empty>
              </Card>
            ) : (
              <ItemList
                data={filteredItems}
                onEdit={(item) => {
                  setEditing(item);
                  setOpen(true);
                }}
                onDelete={deleteItem}
              />
            )}
          </Spin>
        </div>

        {/* Modal */}
        <ItemForm
          open={open}
          initial={editing}
          onCancel={() => {
            setOpen(false);
            setEditing(null);
          }}
          onSubmit={submitItem}
        />
      </div>
    </>
  );
}
