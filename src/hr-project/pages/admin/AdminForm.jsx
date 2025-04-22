import { Form, message } from "antd";
import { JobSection, PersonalSection } from "./constants/inputItem";
import dayjs from "dayjs";
import { SubmitForm } from "../../components/admin/SubmitForm";
import { SuccessPage } from "../../components/SuccessPage";
import { useState } from "react";

export const AdminForm = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
    setIsSubmitted(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    messageApi.error("Please complete all required fields.");
  };

  const onReset = () => {
    form.resetFields();
    messageApi.info("Form has been cleared.");
  };

  const onFill = () => {
    form.setFieldsValue({
      fullName: "Christopher Roger",
      gender: "Male",
      birthDate: dayjs("1990-01-01"),
      phone: "0891234567",
      citizenId: "1234567890123",
      email: "Roger@example.com",
      address: "45 หมู่ 3 ต.สุเทพ อ.เมือง จ.เชียงใหม่ 50200",
      position: "HR Officer",
      employmentType: "Full-time",
      status: "Active",
      startDate: dayjs("2025-01-01"),
      yearsOfService: 5,
      salary: 12000,
    });
    messageApi.success("Form has been auto-filled. You can make changes if needed.");
  };
  return (
    <>
      {contextHolder}
      {isSubmitted ? (
        <div className={styleForm.onSuccess}>
          <SuccessPage />
        </div>
      ) : (
        <Form
          className={styleForm.form}
          form={form}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          variant="outlined"
          autoComplete="on"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className={styleForm.layoutInput}>
            <PersonalSection />
          </div>

          <div className={styleForm.layoutInput}>
            <JobSection />
            <SubmitForm onReset={onReset} onFill={onFill} />
          </div>
        </Form>
      )}
    </>
  );
};

const styleForm = {
  onSuccess: "mt-12",
  form: "flex flex-col xl:flex-row gap-4",
  layoutInput: "xl:basis-1/2 max-w-screen-sm mt-8",
};
