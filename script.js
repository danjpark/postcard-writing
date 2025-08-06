document.getElementById("address-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const lines = [
    document.getElementById("first-name").value + " " + document.getElementById("last-name").value,
    document.getElementById("address1").value,
    document.getElementById("address2").value,
    document.getElementById("citystatezip").value
  ];

  // Simple SVG generation
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
    ${lines
      .filter(line => line.trim() !== "")
      .map((line, i) => 
        `<text x="10" y="${30 + i * 30}" font-family="Hershey Simplex" font-size="20" fill="none" stroke="black">${line}</text>`
      ).join("\n")}
  </svg>`;

  document.getElementById("output").innerHTML = svg;

  // Later: convert SVG to G-code here
});
