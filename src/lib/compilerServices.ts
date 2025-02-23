import axios from "axios";

export const getRuntimes = async () => {
  try {
    const data = await axios.get("https://emkc.org/api/v2/piston/runtimes");
    return data.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error("ERROR FETCHING RUNTIME", error.message);
  }
};
