import { useState } from "react";
import { Button, message, Popconfirm, Space } from "antd";

export const ApprovalConfirm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [disabled, setDisabled] = useState(false);

  const Approve = () => {
    messageApi.success("The request has been approved successfully.");
    setDisabled(true);
  };

  const Reject = () => {
    messageApi.error("The request has been rejected.");
    setDisabled(true);
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button type="primary" disabled={disabled} onClick={Approve}>
          Approve
        </Button>
        <Popconfirm
          title="Please Confirm"
          description="Would you like to proceed with rejecting this request?"
          onConfirm={Reject}
          onCancel={null}
          okText="Yes"
          cancelText="No"
        >
          <Button danger disabled={disabled}>
            Reject
          </Button>
        </Popconfirm>
      </Space>
    </>
  );
};
