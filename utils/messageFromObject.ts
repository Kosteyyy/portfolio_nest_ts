import { TFormData } from "../types";
type KEY = keyof TFormData;
export function messageFromObject(data: TFormData) {
  let message = "";
  const fields = Object.keys(data) as KEY[];
  fields.forEach(
    (field) => (message = message.concat(`${field}: ${data[field]}\n`))
  );
  // for (const field in data) {
  //   message = message.concat(`${field}: ${data[field]}\n`);
  // }
  return message;
}
