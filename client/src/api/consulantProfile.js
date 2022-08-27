import { hostUrl } from "../services/url";
import axios from "axios";

export async function getConsultantProfileData(id) {
  try {
    const res = await axios.get(
      `${hostUrl}/api/profiles/${id}?consultant_id=${id}`
    );
    console.log(res);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}
