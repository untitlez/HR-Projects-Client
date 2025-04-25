import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";

export const ErrorPage = () => {
  const navigate = useNavigate();
  const handleOk = () => navigate(0);

  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        <Button type="primary" onClick={handleOk}>
          Refesh
        </Button>
      }
    />
  );
};
