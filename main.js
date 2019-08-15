const usernamePasswordOnBlur = (e, id) => {
  const value = e.value;
  const requiredDiv = document.getElementById(id);

  if (value === "") {
    requiredDiv.classList.remove("invisible");
    requiredDiv.classList.add("visible");
  } else {
    requiredDiv.classList.remove("visible");
    requiredDiv.classList.add("invisible");
  }
};

const signInOnClick = () => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  if (usernameInput) {
    usernameInput.focus();
  } else if (passwordInput) {
    passwordInput.focus();
  }

  window.location.href = "second-page.html";
};
