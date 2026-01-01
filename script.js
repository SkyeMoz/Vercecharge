const diasInput = document.getElementById("dias");
const priceText = document.getElementById("price");
const rechargeBtn = document.getElementById("recharge");
const helpBtn = document.getElementById("help");
const toast = document.getElementById("toast");

diasInput.addEventListener("input", () => {
  const dias = Number(diasInput.value);
  const price = dias * 0.5;
  priceText.textContent = price.toFixed(2);
});

rechargeBtn.addEventListener("click", () => {
  toast.style.bottom = "30px";
  setTimeout(() => {
    toast.style.bottom = "-80px";
  }, 3000);
});

helpBtn.addEventListener("click", () => {
  window.open("https://example.com", "_blank");
});
