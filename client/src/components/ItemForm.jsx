import { Form, Input, Modal, Button } from "antd";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";

export default function ItemForm({ open, onCancel, onSubmit, initial }) {
  const [form] = Form.useForm();
  const isEditing = !!initial;

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      onSubmit(values);
      form.resetFields();
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  return (
    <Modal
      open={open}
      title={
        <div className="flex items-center gap-2">
          {isEditing ? <EditOutlined /> : <PlusOutlined />}
          <span>{isEditing ? "Edit Item" : "Create New Item"}</span>
        </div>
      }
      onCancel={() => {
        form.resetFields();
        onCancel();
      }}
      footer={[
        <Button
          key="cancel"
          onClick={() => {
            form.resetFields();
            onCancel();
          }}
        >
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {isEditing ? "Update Item" : "Create Item"}
        </Button>,
      ]}
      width={600}
    >
      <Form
        form={form}
        initialValues={initial}
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            { required: true, message: "Please enter item title" },
            { min: 3, message: "Title must be at least 3 characters" },
            { max: 100, message: "Title must not exceed 100 characters" },
          ]}
        >
          <Input
            placeholder="Enter item title..."
            className="rounded"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[
            { max: 500, message: "Description must not exceed 500 characters" },
          ]}
        >
          <Input.TextArea
            placeholder="Enter detailed description..."
            rows={4}
            className="rounded"
          />
        </Form.Item>

        <Form.Item
          name="media"
          label="Media URL (Image/Video)"
          rules={[
            {
              pattern:
                /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i,
              message: "Please enter a valid URL",
            },
          ]}
        >
          <Input
            placeholder="https://example.com/image.jpg"
            className="rounded"
            size="large"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
