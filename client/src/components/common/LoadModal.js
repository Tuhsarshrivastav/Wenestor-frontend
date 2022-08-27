import React from "react";
import Modal from "@material-ui/core/Modal";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function LoadModal({ open }) {
  const classes = useStyles();
  const body = (
    <div
      className={classes.paper}
      style={{
        top: "50%",
        left: "50%",
        transform: `translate(-${50}%, -${50}%)`,
      }}
    >
      <div
        className=" modal-body d-flex justify-content-around flex-column bg-white align-items-center border-0"
        style={{ height: 200, padding: " 10% 0", borderRadius: "20%" }}
      >
        <div
          className="spinner-border text-info"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
        <h3>Loading...</h3>
      </div>
    </div>
  );
  return (
    <Modal open={open} disableBackdropClick={true} disableEscapeKeyDown={true}>
      {body}
    </Modal>
  );
}
LoadModal.propTypes = {
  open: PropTypes.bool.isRequired,
};
