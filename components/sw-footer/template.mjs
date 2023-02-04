import { THONLY } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-footer/shadow.css">
    <link rel="stylesheet" href="components/sw-footer/shadow.css">
    <nav>
        <main>
            <section>
                <div>
                    <h5>Help</h5>
                    <ul>
                        <li><a href="#faqs">FAQs</a></li>
                    </ul> 
                </div>
            </section>
            <section>
                <div>
                    <h5>Silicon Wat</h5>
                    <ul>
                        <li><a href="https://siliconwat.com">University</a></li>
                        <li><a href="https://siliconwat.org">Campus</a></li>
                        <li><a href="https://alumni.siliconwat.org">Alumni</a></li>
                    </ul> 
                </div>
                <div>
                    <h5>Follow</h5>
                    <ul>
                        <li><a href="https://me.thonly.net/#SiliconWat">THonly</a></li>
                        <li><a href="https://twitter.com/siliconwat">Twitter</a></li>
                        <li><a href="https://www.facebook.com/siliconwat">Facebook</a></li>
                        <!--<li><a href="https://youtube.com/@SiliconWat">YouTube</a></li>-->
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <h5>Terms</h5>
                    <ul>
                        <li><a href="#service">Service</a></li>
                        <li><a href="#privacy">Privacy</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Support</h5>
                    <ul>
                        <li><a href="mailto:agency@siliconwat.dev">agency@siliconwat.dev</a></li>
                    </ul> 
                </div>
            </section>
        </main>
        <footer>
            <select onchange="this.getRootNode().host.changeLanguage(event)">
                <option value="en">English</option>
                <option value="km" disabled>Khmer</option>
                <option value="ru" disabled>Russian</option>
                <!--<option value="es" disabled>Spanish</option>
                <option value="zh" disabled>Chinese</option>-->
            </select>
            <small><a href="#">Silicon Wat LLC</a> &copy; 2023</small>
        </footer>
    </nav>
`;

export default template;