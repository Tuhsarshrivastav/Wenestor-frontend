import { CONSULTANT } from "../../constants";

export default {
  options: { business_types: [], industry_types: [], domain_types: [] },
  person: localStorage["person"] || CONSULTANT,
  projects: [],
  login: localStorage["token"] != undefined,
};
