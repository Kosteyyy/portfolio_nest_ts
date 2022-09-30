export const sendMessage = async (message: string) => {
  console.log("sendMessage");
  try {
    if (process.env.NEXT_PUBLIC_BOT_URL) {
      const result = await fetch(
        "NEXT ADDRESS" /*  && process.env.NEXT_PUBLIC_BOT_URL */,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: {
              chat: { id: process.env.NEXT_PUBLIC_CHAT_ID },
              text: message,
            },
          }),
        }
      );
      // const result = await resultJSON.json();
      console.log("RESULT FROM BOT: ", result.status);
    }
    // throw "ERROR";
  } catch (error: any) {
    console.log(error);
    // return error.result.status;
  }
};
