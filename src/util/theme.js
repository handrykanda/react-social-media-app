export default {
  palette: {
    primary: {
      light: "#757ce8",
      main: "#001389",
      dark: "#1a237e",
      contrastText: "#fff"
    },
    secondary: {
      light: "#2196f3",
      main: "#ff7961",
      dark: "#0d47a1",
      contrastText: "#fff"
    }
  },
  globalStyles: {
    typography: {
      useNextVariants: true
    },
    form: {
      textAlign: "center"
    },
    formContainer: {
      backgroundColor: "#ffffff",
      padding: "30px 90px"
    },
    image: {
      margin: "10px auto 20px auto"
    },
    pageTitle: {
      margin: "10px auto 20px auto"
    },
    textField: {
      margin: "5px auto 10px auto"
    },
    button: {
      marginTop: 20,
      marginBottom: 20,
      position: "relative"
    },
    generalError: {
      color: "red",
      fontSize: "0.8rem",
      marginTop: 10
    },
    progress: {
      position: "absolute"
    },
    info: {
      color: "#ff7961"
    },
    invisibleSeparator: {
      border: "none",
      margin: 4
    },
    visibleSeparator: {
      width: "100%",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      marginBottom: 20
    },
    paper: {
      padding: 20,
      height: 442
    },
    profile: {
      "& .image-wrapper": {
        textAlign: "center",
        position: "relative",
        "& button": {
          position: "absolute",
          top: "80%",
          left: "70%"
        }
      },
      "& .profile-image": {
        width: 150,
        height: 150,
        objectFit: "cover",
        maxWidth: "100%",
        borderRadius: "50%",
        backgroundColor: "rgb(132,132,132)"
      },
      "& .profile-details": {
        textAlign: "center",
        "& span, svg": {
          verticalAlign: "middle"
        },
        "& a": {
          color: "#001389"
        }
      },
      "& hr": {
        border: "none",
        margin: "0 0 10px 0"
      },
      "& svg.button": {
        "&:hover": {
          cursor: "pointer"
        }
      }
    },
    buttons: {
      textAlign: "center",
      "& a": {
        margin: "20px 10px"
      }
    }
  }
};
