document.getElementById("start-fly").addEventListener("click", function () {
  const airplaneImg = document.querySelector('img[src="./airplane.png"]');
  airplaneImg.style.bottom = "70%";
  airplaneImg.style.left = "30%";
});
document.getElementById("reset").addEventListener("click", function () {
  const airplaneImg = document.querySelector('img[src="./airplane.png"]');
  airplaneImg.style.bottom = "20px";
  airplaneImg.style.left = "0";
});
