const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/shadow.css">
    <header>
        <tl-kiitos></tl-kiitos>
        <tl-robot></tl-robot>
    </header>
    <main>
        <h1>TBA</h1>
    </main>
    <footer>
        <video src="components/sw-main/hire.mp4" autoplay preload loop muted playsinline></video>
        <video src="components/sw-main/earn.mp4" autoplay preload loop muted playsinline></video>
    </footer>
`;

export default template;