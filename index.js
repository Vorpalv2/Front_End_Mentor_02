const getValue = () => {
  const text = document.querySelector(".emailExample");
  const textValue = text.value;
  console.log(typeof textValue);
  console.log(textValue);
  const emailBox = document.querySelector(".emailExample");
  const emailSecondTitle = document.querySelector(".emailSecondTitle");

  if (textValue.includes(`@`)) {
    console.log("success");
    emailSecondTitle.innerHTML = "";
  } else {
    console.log(emailBox);
    emailBox.style.color = "red";
    emailBox.style.backgroundColor = "pink";
    emailBox.style.borderColor = "red";
    emailSecondTitle.innerHTML = "Valid email required";
  }
};
