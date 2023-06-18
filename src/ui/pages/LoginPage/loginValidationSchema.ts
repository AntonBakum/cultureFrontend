import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email("Пошта має некоректний формат").required("Необхідно ввести електронну пошту"),
  password: yup.string().min(5, "Найменша допустима довжина паролю: 5 символів").required("Необхідно ввести пароль"),
});
