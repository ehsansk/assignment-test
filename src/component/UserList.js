import React, { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import userlistContext from "../context/ContextUser";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Delete, Edit } from "@mui/icons-material";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

// box style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};
// custom margin form
const customcss = {
  marginTop: "20px",
};

// grid item style
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// yup validation schema
const validationSchema = yup.object({
  name: yup.string("Enter your name").required("name is required"),
  job: yup.string("Enter Job").required("job is required"),
});

function UserList() {
  const newdata = useContext(userlistContext);
  console.log("newdata=>", newdata);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //   form

  //   post call function
  const postData = (value) => {
    axios
      .post("https://reqres.in/api/users", value)
      .then((response) => {
        console.log(response);

        toast.success("data submitted successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("something went wrong");
      })
      .finally(() => {
        handleClose();
      });
  };

  //   formik hook
  const formik = useFormik({
    initialValues: { name: "", job: "" },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      postData(values);
      resetForm();
    },
  });

  return (
    <>
      <Container>
        <Box
          m={1}
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Button
            onClick={handleOpen}
            variant="contained"
            color="primary"
            sx={{ height: 40 }}
          >
            Add
          </Button>
        </Box>
        <Box marginTop={5}>
          <Grid container spacing={2}>
            {newdata.map((el) => {
              return (
                <Grid item md={3} key={el.id}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image={el.avatar}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {el.first_name} {el.last_name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {el.email}
                      </Typography>
                    </CardContent>
                  
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div>
                <Formik>
                  <form onSubmit={formik.handleSubmit}>
                    <Box
                      m={1}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box>
                        {" "}
                        <Typography>ADD USER</Typography>
                      </Box>
                      <Button onClick={handleClose}>x</Button>
                    </Box>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="name"
                      name="name"
                      label="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                      mb={2}
                      sx={customcss}
                      fullWidth
                      id="job"
                      name="job"
                      label="job"
                      value={formik.values.job}
                      onChange={formik.handleChange}
                      error={formik.touched.job && Boolean(formik.errors.job)}
                      helperText={formik.touched.job && formik.errors.job}
                    />
                    <Button
                      sx={customcss}
                      color="primary"
                      variant="contained"
                      fullWidth
                      type="submit"
                    >
                      Submit
                    </Button>
                  </form>
                </Formik>
              </div>
            </Box>
          </Modal>
        </div>
      </Container>
    </>
  );
}

export default UserList;
