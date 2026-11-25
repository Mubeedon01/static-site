const button = document.getElementById("check-btn");
const output = document.getElementById("health-output");

button.addEventListener("click", async () => {
  output.textContent = "Checking /health...";
  try {
    const response = await fetch("/health");
    const text = await response.text();
    output.textContent = `Status: ${response.status}\nResponse: ${text.trim()}`;
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  }
});
