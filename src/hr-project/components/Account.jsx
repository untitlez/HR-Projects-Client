import { Button } from "antd";

export const Account = () => {
  return (
    <Button size='large'>
      <img className="rounded-md w-7.5 h-7.5" src="shiba.jpg" alt="avatar" />
      <div className="text-sm">
        <p>Shiba</p>
        <p className="text-xs opacity-75">HR Officer</p>
      </div>
    </Button>
  );
};
