import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {
  const theme = {
    background: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "#00B2B2",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#00B2B2",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c",
  };

  const config = {
    width: "300px",
    height: "400px",
    floating: true,
  };
  const steps = [
    {
      id: "Greet",
      message: "Bonjour, Bienvenue sur le site de Julien Pellattiero",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Quel est votre prenom?",
      trigger: "Waiting user input for name",
    },
    {
      id: "Waiting user input for name",
      user: true,
      trigger: "Asking options to contact",
    },
    {
      id: "Asking options to contact",
      message:
        "Bonjour {previousValue}, choisissez une infos que vous souhaitez avoir.",
      trigger: "Displaying options to contact",
    },
    {
      id: "Displaying options to contact",
      options: [
        {
          value: "mail",
          label: "mail",
          trigger: "mail is available",
        },
        {
          value: "phone",
          label: "phone",
          trigger: "Phone is available",
        },
      ],
    },

    {
      id: "Phone is available",
      message: "06 XX XX XX XX",
      trigger: "Asking for mail after phone",
    },
    {
      id: "Asking for mail after phone",
      message: "Voulez-vous le mail en complement ?",
      options: [
        {
          value: true,
          label: "Yes",
          trigger: "Asking for mail",
        },
        {
          value: "false",
          label: "No",
          trigger: "Done",
        },
      ],
    },
    {
      id: "mail is available",
      message: "ju.jjjjjj@gmail.com",
    },

    {
      id: "Asking for mail",
      message: "ju.jjjjjj@gmail.com",
    },
    {
      id: "Done",
      message: "Have a great day !!",
      end: true,
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
}
export default CustomChatbot;
