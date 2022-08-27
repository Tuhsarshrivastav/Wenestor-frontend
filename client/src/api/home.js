import axios from "axios";
import { hostUrl } from "../services/url";

export async function getHomePageData() {
  try {
    const response = await axios.get(hostUrl + "/api/homepage");
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
