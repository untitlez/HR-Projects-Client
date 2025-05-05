import { useNavigate } from "react-router-dom";
import { Button, Popconfirm } from "antd";

export const Account = ({ fullName, position }) => {
  const navigate = useNavigate();
  const onConfirm = () => navigate("/");

  return (
    <Popconfirm
      placement="bottomRight"
      title="Confirm Log Out"
      description="Are you sure you want to sign out?"
      okText="Log Out"
      onConfirm={onConfirm}
    >
      <Button size="large">
        <img className="rounded-md w-8 h-8" src="shiba.jpg" alt="avatar" />
        <div className="text-sm">
          <p>{fullName}</p>
          <p className="text-xs opacity-75">{position}</p>
        </div>
      </Button>
    </Popconfirm>
  );
};
