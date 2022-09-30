const testobject = {
  name: "Константин",
  phone: "+7-916-341-90-77",
  email: "averkiev@yandex.ru",
};

function stringFromObject(data) {
  let message = "";
  for (field in data) {
    message = message.concat(`${field}: ${data[field]}\n`);
  }
  return message;
}

stringFromObject(testobject);
