import React, { useContext,useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import userlistContext from "../context/ContextUser";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import Modal from '@mui/material/Modal';
import { Delete, Edit } from "@mui/icons-material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function UserList() {
  const newdata = useContext(userlistContext);
  console.log("newdata=>", newdata);
  const [open, setOpen] = useState(false);
 
  const handleOpen =()=>{
    setOpen(true)
  }
  const handleClose =()=>{
    setOpen(false)
  }

  
  return (
    <>
      <Container >
        <Box
            m={1}
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            >
            <Button variant="contained" color="primary" sx={{ height: 40 }}>
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
                      <Typography  variant="body2" color="text.secondary">
                       {el.email}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        p: 1,
                        m: 1,
                        bgcolor: "background.paper",
                        borderRadius: 1,
                      }}
                    >
                      <Item>
                        {" "}
                        <Edit />
                      </Item>
                      <Item>
                        <Delete />
                      </Item>
                    </Box>
                  </Card>
                  
                </Grid>
              );
            })}

           
          </Grid>
        </Box>

        <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
      </Container>
    </>
  );
}

export default UserList;
