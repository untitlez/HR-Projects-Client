import { useNavigate } from "react-router-dom";

import { Form } from "antd";
import { useActionStore } from "../../store/store";
import { loginItem } from "./constants/loginItem";
import { accounts } from "./constants/accountData";

import { ButtonLogin } from "../../components/auth/ButtonLogin";

export const LoginForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const { setLoading, setDisabled } = useActionStore();

  const adminAccount = () => form.setFieldsValue(accounts.admin);
  const employeeAccount = () => form.setFieldsValue(accounts.employee);

  const onLogin = () => {
    setLoading(true);
    setDisabled(true);

    setTimeout(() => {
      if (form.getFieldValue("role") === "admin") navigate("/admin");
      if (form.getFieldValue("role") === "employee") navigate("/employee");
      setLoading(false);
      setDisabled(false);
    }, 3000);
  };

  return (
    <>
      <Form
        name="login"
        form={form}
        initialValues={{ remember: true }}
        style={{ maxWidth: 360 }}
      >
        {loginItem.map((item) => (
          <Form.Item key={item.name} name={item.name} rules={item.rules}>
            {item.input}
          </Form.Item>
        ))}
        <ButtonLogin
          onLogin={onLogin}
          adminAccount={adminAccount}
          employeeAccount={employeeAccount}
        />
      </Form>
    </>
  );
};
