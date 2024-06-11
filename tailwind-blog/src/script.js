async function loadHTMLContent() {
  const headerResponse = await fetch('../src/header.html');
  const headerText = await headerResponse.text();
  document.getElementById("header").innerHTML = headerText;

  const footerResponse = await fetch('../src/footer.html');
  const footerText = await footerResponse.text();
  document.getElementById("footer").innerHTML = footerText;
}
loadHTMLContent();

async function addLinkElement(rel, href, crossorigin) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    if (crossorigin) {
      link.crossOrigin = crossorigin;
    }
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to load ${href}`));
    document.head.appendChild(link);
  });
}

async function addStylesAndFonts() {
  try {
    // Add stylesheet
    await addLinkElement('stylesheet', 'output.css');

    // Add Google Fonts preconnect and stylesheet links
    await addLinkElement('preconnect', 'https://fonts.googleapis.com');
    await addLinkElement('preconnect', 'https://fonts.gstatic.com', 'anonymous');
    await addLinkElement('stylesheet', 'https://fonts.googleapis.com/css2?family=Domine:wght@400..700&display=swap');
    await addLinkElement('stylesheet', 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    await addLinkElement('stylesheet', 'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');
  } catch (error) {
    console.error(error);
  }
}

// Call the function to add the links
addStylesAndFonts();