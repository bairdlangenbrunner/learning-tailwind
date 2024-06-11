async function loadHTMLContent() {
  const headerResponse = await fetch('../src/header.html');
  const headerText = await headerResponse.text();
  document.getElementById("header").innerHTML = headerText;

  const footerResponse = await fetch('../src/footer.html');
  const footerText = await footerResponse.text();
  document.getElementById("footer").innerHTML = footerText;
}
loadHTMLContent();