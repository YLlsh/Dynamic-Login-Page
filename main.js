function change_form() {
  const regi = document.getElementById("regi");
  const plain_log = document.getElementById("plain_log");
  const plain_register = document.getElementById("plain_register");
  const log = document.getElementById("log");

  const logDisplay = getComputedStyle(log).display;
  const regiDisplay = getComputedStyle(regi).display;
  const plainLogDisplay = getComputedStyle(plain_log).display;
  const plainRegisterDisplay = getComputedStyle(plain_register).display;

  if (
    plainLogDisplay === "none" &&
    regiDisplay === "none" &&
    plainRegisterDisplay === "flex" &&
    logDisplay === "flex"
  ) {
    log.style.transform = "scale(1)";

    plain_register.style.backgroundColor = "#e9e9f6";

    setTimeout(() => {
      log.style.transform = "scale(1)";
    }, 100);

    log.style.transform = "scale(0.4)";

    setTimeout(() => {
      plain_register.style.display = "none";
      log.style.display = "none";
      regi.style.display = "flex";
      plain_log.style.display = "flex";
    }, 300);

    setTimeout(() => {
      regi.style.transform = "scale(1)";
    }, 325);

    regi.style.transform = "scale(0.4)";

    setTimeout(() => {
      plain_log.style.backgroundColor = "#4f4fb4";
    }, 325);
  } else {
    regi.style.transform = "scale(0.4)";

    setTimeout(() => {
      regi.style.transform = "scale(1)";
    }, 100);

    plain_log.style.backgroundColor = "#e9e9f6";

    setTimeout(() => {
      plain_log.style.display = "none";
      regi.style.display = "none";
      plain_register.style.display = "flex";
      log.style.display = "flex";
    }, 300);

    setTimeout(() => {
      log.style.transform = "scale(1)";
    }, 325);

    log.style.transform = "scale(0.4)";

    setTimeout(() => {
      plain_register.style.backgroundColor = "#4f4fb4";
    }, 325);
  }
}
