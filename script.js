const container = document.getElementById("grid-container");

// Loop 256 times to generate a 16x16 grid (16 * 16 = 256)
for (let i = 1; i <= 256; i++) {
  const newDiv = document.createElement("div");
  newDiv.className = "grid-box";
  newDiv.textContent = i;
  container.appendChild(newDiv);
}
