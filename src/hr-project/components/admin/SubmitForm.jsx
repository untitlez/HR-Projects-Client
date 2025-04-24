import { Button, Space } from "antd";

export const SubmitForm = ({ onReset, onFill }) => {
  return (
    <>
      <Space className="w-full flex justify-center mt-6">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill Form
        </Button>
      </Space>
    </>
  );
};
