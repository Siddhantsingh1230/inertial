export const checkSystemMode = () => {
  if (localStorage.getItem("mode") === null) {
    localStorage.setItem(
      "mode",
      window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }
  if (localStorage.getItem("mode") === "true") {
    return true;
  } else {
    return false;
  }
};

export const changeLocalSystemMode = (mode) => {
  localStorage.setItem("mode", mode);
};
