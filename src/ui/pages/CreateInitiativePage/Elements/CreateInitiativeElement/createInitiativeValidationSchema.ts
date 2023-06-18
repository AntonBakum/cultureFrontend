import * as yup from "yup";

const inputPattern = /^([^0-9]*)$/;
export const createInitiativeValidationSchema = yup.object().shape({
  userName: yup
    .string()
    .matches(inputPattern, "Ім'я має включати в себе лише символи алфавіту")
    .min(3, "Мінімальна довжина: 3 символи")
    .max(50, "Максимальна довжина: 50 символів")
    .required("Необхідно ввести ім'я"),
  name: yup.string().max(50, "Максимальна довжина: 50 символів").required("Необхідно ввести назву ініціативи"),
  description: yup.string().min(10, "Мінімальна довжина опису: 10 символів").required("Необхідно додати опис до ініціативи"),
});
