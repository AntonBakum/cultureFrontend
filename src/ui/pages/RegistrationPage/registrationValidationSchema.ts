import * as yup from "yup";

const inputPattern = /^([^0-9]*)$/;
export const registrationValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(inputPattern, "Ім'я має включати в себе лише символи алфавіту")
    .min(3, "Мінімальна довжина: 3 символи")
    .max(50, "Максимальна довжина: 50 символів")
    .required("Необхідно ввести ім'я"),
  email: yup.string().email("Пошта має некоректний формат").required("Необхідно ввести електронну пошту"),
  password: yup.string().min(5, "Найменша допустима довжина паролю: 5 символів").required("Необхідно ввести пароль"),
});
