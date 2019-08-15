const usernamePasswordOnBlur = (e, id) => {
  const value = e.value;
  const requiredDiv = document.getElementById(id);

  console.log(value);

  if (value === "") {
    requiredDiv.classList.remove("invisible");
    requiredDiv.classList.add("visible");
  } else {
    requiredDiv.classList.remove("visible");
    requiredDiv.classList.add("invisible");
  }
};
