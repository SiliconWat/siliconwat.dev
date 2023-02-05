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
            <h1>Hire Your Own Development Team!</h1>
            <ul>
                <li>Lead by one of our Seasoned Architects</li>
                <li>Engineered by one of our Top Graduates</li>
                <li>Managed by You until you're 100% happy</li>
            </ul>
        </section>
        <video src="components/sw-main/hire.mp4" autoplay preload loop muted playsinline></video>
    </main>
    <footer>
        <section>
            <h1>Get Paid as a Freelance Consultant!</h1>
            <ul>
                <li>If you don't know how to code, you can take our coding courses designed especially for absolute beginners.</li>
                <li>After graduation, gain mastery by tutoring the next cohort of students.</li>
                <li>Then, apply to become one of our freelance consultants who are lead by our seasoned architects.</li>
                <li>After gaining experience, you may be selected to apprentice with your Lead Architect to become one yourself!</li>
            </ul>
        </section>
        <video src="components/sw-main/earn.mp4" autoplay preload loop muted playsinline></video>
    </footer>
`;

export default template;