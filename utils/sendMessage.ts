export const sendMessage = async (message: string) => {
  console.log("sendMessage");
  try {
    if (process.env.NEXT_PUBLIC_BOT_URL) {
      const result = await fetch(
        /* "NEXT ADDRESS"  &&  */ process.env.NEXT_PUBLIC_BOT_URL,
        {
          method: "POST",
          // mode: "no-cors", - если это включить, приходит респонс, но без статуса и соощения не проходят.
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
      // const res_final = await result.json();
      const res = await result.text();
      console.log("RESULT FROM BOT: ", result, res);
    }
    // throw "ERROR";
  } catch (error: any) {
    console.log(error);
    // return error.result.status;
  }
};
