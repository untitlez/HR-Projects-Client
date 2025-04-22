import React from "react";
import { DatePicker, Form, Input, InputNumber, Radio, Select } from "antd";

export const MyProfile = () => {
  const [form] = Form.useForm();

  const onFill = () => {
    form.setFieldsValue({ note: "Hello world!", gender: "male" });
  };
  return (
    <>
    <Form
      className="flex flex-col justify-self-center w-full"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      form={form}
      variant="outlined"
      style={{ maxWidth: 600, marginTop: 32 }}
      autoComplete="on"
    >

      {/* Personal  */}
      <Form.Item
        label="Full Name"
        name="fullName"
        rules={[{ required: true, message: "Please input full name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Gender"
        name="gender"
        rules={[{ required: true, message: "Please select gender!" }]}
      >
        <Radio.Group>
          <Radio value="Male">Male </Radio>
          <Radio value="Female">Female</Radio>
          <Radio value="Other">Other</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, type: "email", message: "Invalid email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: "Please input address!" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: "Please input phone number!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Citizen ID"
        name="citizenId"
        rules={[{ required: true, message: "Please input citizen ID!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Birth Date"
        name="birthDate"
        rules={[{ required: true, message: "Please select birth date!" }]}
      >
        <DatePicker />
      </Form.Item>

      {/* Jobs  */}
      <Form.Item
        label="Position"
        name="position"
        rules={[{ required: true, message: "Please input position!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Start Date"
        name="startDate"
        rules={[{ required: true, message: "Please select start date!" }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Employment Type"
        name="employmentType"
        rules={[{ required: true, message: "Please select type!" }]}
      >
        <Select>
          <Option value="Full-time">Full-time</Option>
          <Option value="Part-time">Part-time</Option>
          <Option value="Contract">Contract</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Status"
        name="status"
        rules={[{ required: true, message: "Please select status!" }]}
      >
        <Select>
          <Option value="Active">Active</Option>
          <Option value="Inactive">Inactive</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Years of Service"
        name="yearsOfService"
        rules={[{ required: true, message: "Please input years of service!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Salary"
        name="salary"
        rules={[{ required: true, message: "Please input salary!" }]}
      >
        <InputNumber min={0} style={{ width: "100%" }} />
      </Form.Item>

      {/* Leave Days */}
      <Form.Item
        label="Sick Leave"
        name={["leaveDays", "sickLeave"]}
        rules={[{ required: true }]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item
        label="Personal Leave"
        name={["leaveDays", "personalLeave"]}
        rules={[{ required: true }]}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item
        label="Vacation Leave"
        name={["leaveDays", "vacationLeave"]}
        rules={[{ required: true }]}
      >
        <InputNumber min={0} />
      </Form.Item>

      {/* Approval */}
      <Form.Item label="Leave Type" name={["approval", "leaveType"]}>
        <Input />
      </Form.Item>
      <Form.Item label="Leave Days" name={["approval", "days"]}>
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item label="Leave Date" name={["approval", "leaveDate"]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Note" name={["approval", "note"]}>
        <Input.TextArea />
      </Form.Item>
    </Form> 
    </>
  );
};
