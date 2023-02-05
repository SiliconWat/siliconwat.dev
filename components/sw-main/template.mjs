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
            <h1>Hire Your <em>Own</em> Development Team!</h1>
            <ul>
                <li><b>Led</b> by <em>one</em> of our <strong><u>Seasoned</u> Architects</b></strong></li>
                <li><b>Engineered</b> by <em>one</em> of our <strong><u>Top</u> Graduates</strong></li>
                <li><b>Managed</b> by <em>you</em> until you're <strong><u>100%</u> Happy</strong></li>
            </ul>
        </section>
        <video src="components/sw-main/hire.mp4" autoplay preload loop muted playsinline></video>
    </main>
    <footer>
        <section>
            <h1>Get <em>Paid</em> as a Freelance Consultant!</h1>
            <ul>
                <li>If you don't know how to code, you can take our <strong>coding courses</strong> designed especially for <em>absolute beginners</em>.</li>
                <li>After graduation, <strong>gain mastery</strong> by <em>tutoring</em> the next cohort of students.</li>
                <li>Then, apply to become one of our <strong>freelance consultants</strong> who are led by our <em>seasoned architects</em>.</li>
                <li>After gaining experience, you may be selected to <strong>apprentice</strong> with your Lead Architect to <em>become one yourself!</em></li>
            </ul>
        </section>
        <video src="components/sw-main/earn.mp4" autoplay preload loop muted playsinline></video>
    </footer>
`;

export default template;