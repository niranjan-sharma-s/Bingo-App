import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bingoHeading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    font: "1.2em bold",
    fontFamily: "cursive",
    margin: "1.5em",
    color: `${theme.palette.primary.main}`,
  },

  bingoBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  bingoBoard: {
    display: "flex",
    justifyContent: "center",
  },

  bingoButton: {
    height: "100%",
    width: "100%",
    border: "1px solid ",
    borderColor: "",
    borderRadius: "4px",
    transition: "all .3s ease-in-out",
    ":hover": {
      transform: "scale(1.1)",
    },
  },
}));

export default useStyles;
