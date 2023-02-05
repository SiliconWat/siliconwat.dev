const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/shadow.css">
    <header>
        <section>
            <tl-kiitos></tl-kiitos>
            <tl-robot></tl-robot>
        </section>
        <video src="components/sw-main/kiitos.mp4" autoplay preload loop muted playsinline></video>
    </header>
    <main>
        <section>
            <h1>Hire</h1>
        </section>
        <video src="components/sw-main/hire.mp4" autoplay preload loop muted playsinline></video>
    </main>
    <footer>
        <section>
            <h1>Earn</h1>
        </section>
        <video src="components/sw-main/earn.mp4" autoplay preload loop muted playsinline></video>
    </footer>
`;

export default template;