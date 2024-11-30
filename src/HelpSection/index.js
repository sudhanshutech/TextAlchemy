import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Fab,
  Typography,
} from "@mui/material";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = [
    {
      num: 1,
      text: "Go to Google Gimini Developer",
      description:
        "Go to google gimini developer API and click on Get a Gemini API key",
      button: "Gemini API",
      image: "/google1.png",
    },
    {
      num: 2,
      text: "Create a API Key",
      description:
        "Click on Create a API Key and fill the form with the required details and click on Create",
      image: "/google2.png",
    },
    {
      num: 3,
      text: "API Keys",
      description:
        "Once your API key is created, you can see the API key in the API Keys section below. Paste the api key in the input box and click on submit",
      image: "/google3.png",
    },
  ];

  return (
    <div>
      <Button
        sx={{
          borderRadius: "12px",
          border: "1px solid #1976d2",
        }}
        onClick={toggleDrawer(true)}
      >
        How to use?
      </Button>
      <Drawer
        sx={{
          "& .MuiDrawer-paper": { padding: "20px" },
        }}
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <List>
          <Typography
            sx={{
              textAlign: "center",
              marginBottom: "10px",
            }}
            variant="h6"
            component="div"
          >
            Steps to get the Gemini API
          </Typography>
          <Divider />
          {DrawerList.map((item, index) => (
            <>
              <Fab sx={{mt:2}} color="primary" aria-label="add">
                {item.num}
              </Fab>
              <ListItem key={item.text}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.text}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">{item.button}</Button>
                  </CardActions>
                </Card>
              </ListItem>
            </>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
