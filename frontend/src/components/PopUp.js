import {
  Dialog,
  DialogContent,
  DialogTitle,
  Tooltip,
  IconButton,
} from "@mui/material";
import React from "react";
import { Close } from "@mui/icons-material";

export default function PopUp(props) {
  const { title, children, openPopup, setOpenPopup } = props;

  return (
    //alert("Hey")
    <Dialog open={openPopup} maxWidth="sm">
      <DialogTitle>
        <div style={{ display: "inline" }}>
          {title}
          <Tooltip>
            <IconButton
              sx={{ float: "right" }}
              onClick={() => setOpenPopup(false)}
            >
              <Close />
            </IconButton>
          </Tooltip>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
