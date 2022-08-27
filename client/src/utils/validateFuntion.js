import { CONSULTANT } from "../constants";

export const validateFunction = (person, values) => {
  const err = {};
  if (!values.name) err.name = "Enter Name";
  if (!values.contact) err.contact = "Enter Contact";
  if (!values.email) err.email = "Enter Email";
  if (!values.password) err.password = "Enter Password";
  if (!values.confirmpassword) err.confirmpassword = "Enter Confirm Password";
  if (person === CONSULTANT) {
    if (!values.experience) err.experience = "Enter Experience ";
    if (!values.industry) err.industry = "Enter Industy";
  } else {
    if (!values.name_business) err.name_business = "Enter Name of the business";
    if (!values.type_business) err.type_business = "Enter type of the business";
  }

  //Password checking
  if (
    values.password &&
    values.confirmpassword &&
    values.confirmpassword !== values.password
  )
    err.confirmpassword = "Confirm Password doesn't match Password";
  return err;
};
