import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import axios from "axios";
import { API_URL } from "../../services/url";

const BusinessesDashboard = () => {
  const [data, setData] = useState([]);
  const getAllBusiness = async () => {
    try {
      const token = localStorage.getItem("admin");
      const res = await axios.get(`${API_URL}/admin/fatchallbusiness`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setData(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error.messagge);
    }
  };
  useEffect(() => {
    getAllBusiness();
  }, []);

  return (
    <Layout>
      <div className="text">
        <div className="align-head">List of Businesses</div>
        <table className="table table-bordered">
          <thead style={{ background: "#D9D9D9" }}>
            <tr>
              <th style={{ color: "#01C853" }} scope="col">
                Name
              </th>
              <th style={{ color: "#01C853" }} scope="col">
                Size
              </th>
              <th style={{ color: "#01C853" }} scope="col">
                Designation
              </th>
              <th style={{ color: "#01C853" }} scope="col">
                Category
              </th>
              <th style={{ color: "#01C853" }} scope="col">
                Email-Id
              </th>
              <th style={{ color: "#01C853" }} scope="col">
                Contact
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => {
              const data = (
                <>
                  <tr style={{ background: "#f8f8f8" }}>
                    <th scope="col">{e.name}</th>
                    <th scope="col">{e.size}</th>
                    <th scope="col">{e.desgnation}</th>
                    <th scope="col">{e.category}</th>
                    <th scope="col">{e.email}</th>
                    <th scope="col">{e.contact}</th>
                  </tr>
                </>
              );
              return data;
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default BusinessesDashboard;
