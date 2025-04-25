import { Button, Form, message, Modal } from "antd";
import { useActionStore } from "../../store/store";

import { SuccessPage } from "../../components/SuccessPage";
import { LeaveFormItem } from "./constants/inputItem";

export const LeaveForm = ({ personal }) => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const {
    loading,
    setLoading,
    isSubmitted,
    setIsSubmitted,
    isModalOpen,
    setIsModalOpen,
  } = useActionStore();

  const onFinish = () => {
    setLoading(true);
    setIsModalOpen(true);
  };

  const onFinishFailed = () => {
    messageApi.error("Please complete all required fields.");
  };

  const handleOk = () => {
    setIsSubmitted(true);
    setIsModalOpen(false);
    setLoading(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setLoading(false);
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
          autoComplete="on"
          initialValues={{
            fullName: personal.fullName,
            position: personal.position,
            phone: personal.phone,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <div className={styleForm.input}>
            <LeaveFormItem personal={personal} />
          </div>

          <div className={styleForm.button}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </div>
          <Modal
            title="Confirm Leave Request"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Submit Request"
            cancelText="Cancel"
          >
            <p>Are you sure you want to submit this leave request?</p>
          </Modal>
        </Form>
      )}
    </>
  );
};

const styleForm = {
  onSuccess: "mt-12",
  form: "max-w-screen-sm w-full flex flex-col justify-self-center",
  input: "flex flex-col my-8",
  button: "flex justify-center",
};
