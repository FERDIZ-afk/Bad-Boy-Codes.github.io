function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
} /*********************** Menu Component ***********************/
const Menu = props => {
    return /*#__PURE__*/ (React.createElement("div", {
        className: `menu-container ${props.showMenu}`
    }, /*#__PURE__*/ React.createElement("div", {
        className: "overlay"
    }), /*#__PURE__*/ React.createElement("div", {
        className: "menu-items"
    }, /*#__PURE__*/ React.createElement("ul", null, /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "#welcome-section",
        onClick: props.toggleMenu
    }, "HOME")), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "#about",
        onClick: props.toggleMenu
    }, "ABOUT")), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "#projects",
        onClick: props.toggleMenu
    }, "PORTFOLIO")), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "#contact",
        onClick: props.toggleMenu
    }, "CONTACT"))), /*#__PURE__*/ React.createElement(SocialLinks, null))));
}; /*********************** Nav Component ***********************/
const Nav = props => {
    return /*#__PURE__*/ (React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("nav", {
        id: "navbar"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "nav-wrapper"
    }, /*#__PURE__*/ React.createElement("p", {
        className: "brand"
    }, "Semant", /*#__PURE__*/ React.createElement("strong", null, " Panda")), /*#__PURE__*/ React.createElement("a", {
        onClick: props.toggleMenu,
        className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button'
    }, /*#__PURE__*/ React.createElement("span", null))))));
}; /*********************** Header Component ***********************/
const Header = props => {
    return /*#__PURE__*/ (React.createElement("header", {
        id: "welcome-section"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "forest"
    }), /*#__PURE__*/ React.createElement("div", {
        className: "silhouette"
    }), /*#__PURE__*/ React.createElement("div", {
        className: "moon"
    }), /*#__PURE__*/ React.createElement("div", {
        className: "container"
    }, /*#__PURE__*/ React.createElement("h1", null, /*#__PURE__*/ React.createElement("span", {
        className: "line"
    }, "Hey there,"), /*#__PURE__*/ React.createElement("span", {
        className: "line"
    }, " I am ", /*#__PURE__*/ React.createElement("span", {
        className: "color"
    }, "Semant"))), /*#__PURE__*/ React.createElement("div", {
        className: "buttons"
    }, /*#__PURE__*/ React.createElement("a", {
        href: "#projects"
    }, "about me"), /*#__PURE__*/ React.createElement("a", {
        href: "#contact",
        className: "cta"
    }, "get in touch")))));
}; /*********************** About Component ***********************/
const About = props => {
    return /*#__PURE__*/ (React.createElement("section", {
        id: "about"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "wrapper"
    }, /*#__PURE__*/ React.createElement("article", null, /*#__PURE__*/ React.createElement("div", {
        className: "title"
    }, /*#__PURE__*/ React.createElement("h3", null, "Who's this guy?"), /*#__PURE__*/ React.createElement("p", {
        className: "separator"
    })), /*#__PURE__*/ React.createElement("div", {
        className: "desc full"
    }, /*#__PURE__*/ React.createElement("h4", {
        className: "subtitle"
    }, "My name is Semant."), /*#__PURE__*/ React.createElement("p", null, "I am a node and express web developer based in the most alienic place in India."), /*#__PURE__*/ React.createElement("p", null, "I like to make cool designes with css as well as making things pretty and easy to use. I can't stop learning new things; the more, the better. And yeah I like watching anime, My favorite one is Naruto")), /*#__PURE__*/ React.createElement("div", {
        className: "title"
    }, /*#__PURE__*/ React.createElement("h3", null, "What does he do?"), /*#__PURE__*/ React.createElement("p", {
        className: "separator"
    })), /*#__PURE__*/ React.createElement("div", {
        className: "desc"
    }, /*#__PURE__*/ React.createElement("h4", {
        className: "subtitle"
    }, "I'm a programmer."), /*#__PURE__*/ React.createElement("p", null, "I try making so many designes and functions with javascript and css, I mostly get help from internet ;-;"), /*#__PURE__*/ React.createElement("p", null, "I also like making online applications with node js.")), /*#__PURE__*/ ))));
}; /*********************** Project Component ***********************/
const Project = props => {
    const tech = {
        sass: 'fab fa-sass',
        css: 'fab fa-css3-alt',
        js: 'fab fa-js-square',
        react: 'fab fa-react',
        vue: 'fab fa-vuejs',
        d3: 'far fa-chart-bar',
        node: 'fab fa-node'
    };
    const link = props.link || 'http://';
    const repo = props.repo || 'http://';
    return /*#__PURE__*/ (React.createElement("div", {
        className: "project"
    }, /*#__PURE__*/ React.createElement("a", {
        className: "project-link",
        href: link,
        target: "_blank",
        rel: "noopener noreferrer"
    }, /*#__PURE__*/ React.createElement("img", {
        className: "project-image",
        src: props.img,
        alt: 'Screenshot of ' + props.title
    })), /*#__PURE__*/ React.createElement("div", {
        className: "project-details"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "project-tile"
    }, /*#__PURE__*/ React.createElement("p", {
        className: "icons"
    }, props.tech.split(' ').map((t) => /*#__PURE__*/ React.createElement("i", {
        className: tech[t],
        key: t
    }))), props.title, ' '), props.children, /*#__PURE__*/ React.createElement("div", {
        className: "buttons"
    }, /*#__PURE__*/ React.createElement("a", {
        href: link,
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Check it out ", /*#__PURE__*/ React.createElement("i", {
        className: "fas fa-external-link-alt"
    }))))));
}; /*********************** Projects Component ***********************/
const Projects = props => {
    return /*#__PURE__*/ (React.createElement("section", {
        id: "projects"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "projects-container"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "heading"
    }, /*#__PURE__*/ React.createElement("h3", {
        className: "title"
    }, "My Works"), /*#__PURE__*/ React.createElement("p", {
        className: "separator"
    }), /*#__PURE__*/ React.createElement("p", {
        className: "subtitle"
    }, "Here's a list of ", /*#__PURE__*/ React.createElement("u", null, "most"), " of the projects I've been working on lately.")), /*#__PURE__*/ React.createElement("div", {
        className: "projects-wrapper"
    }, /*#__PURE__*/ React.createElement(Project, {
        title: "Suzumi",
        img: 'https://media.discordapp.net/attachments/832207732982415370/925666486515810335/e0ab8713534878863523f85a72a2ee06.jpg',
        tech: "js css node",
        link: "https://badboy.is-a.dev/suzumi"
    }, /*#__PURE__*/ React.createElement("small", null, "Built using Node, Express, MongoDB, CSS, Discord js."), /*#__PURE__*/ React.createElement("p", null, "A fun discord bot helps you manipulate images make custom texts manipulate texts and so much cool features.")), /*#__PURE__*/ React.createElement(Project, {
        title: "Main Website",
        img: 'https://media.discordapp.net/attachments/849926460994879541/948971732998434836/IMG_20220303_212445.jpg',
        tech: "js css html ejs node express",
        link: "https://badboy.is-a.dev/",
    }, /*#__PURE__*/ React.createElement("small", null, "Built using Node, Express, Ejs, HTML, CSS, Javascript"), /*#__PURE__*/ React.createElement("p", null, "The main website, or the extended version of this website.")), /*#__PURE__*/ React.createElement(Project, {
        title: "API",
        img: 'https://media.discordapp.net/attachments/849926460994879541/948975312413294632/IMG_20220303_213852.jpg',
        tech: "js node html ejs css",
        link: "https://badboy.is-a.dev/",
    }, /*#__PURE__*/ React.createElement("small", null, "Built using Node, Ejs, Express js, HTML, Javascript and CSS."), /*#__PURE__*/ React.createElement("p", null, "An Api that helps you fetch different informationd about apps like netflix, twitch, twitter etc, has image manipulation endpoints and others."))))));
}; /*********************** Contact Component ***********************/
const Contact = props => {
    return /*#__PURE__*/ (React.createElement("section", {
        id: "contact"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "container"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "heading-wrapper"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "heading"
    }, /*#__PURE__*/ React.createElement("p", {
        className: "title"
    }, "Want to ", /*#__PURE__*/ React.createElement("br", null), "contact me?"), /*#__PURE__*/ React.createElement("p", {
        className: "separator"
    }), /*#__PURE__*/ React.createElement("p", {
        className: "subtitle"
    }, "Please, use the form below or send an email to ", '', /*#__PURE__*/ React.createElement("span", {
        className: "mail"
    }, "badboyplays9999", /*#__PURE__*/ React.createElement("i", {
        className: "fas fa-at at"
    }), "gmail", /*#__PURE__*/ React.createElement("i", {
        className: "fas fa-circle dot"
    }), "com"), ":")), /*#__PURE__*/ React.createElement(SocialLinks, null)), /*#__PURE__*/ React.createElement("form", {
        id: "contact-form",
        action: "#"
    }, /*#__PURE__*/ React.createElement("input", {
        placeholder: "Name",
        name: "name",
        type: "text",
        required: true
    }), /*#__PURE__*/ React.createElement("input", {
        placeholder: "Email",
        name: "email",
        type: "email",
        required: true
    }), /*#__PURE__*/ React.createElement("textarea", {
        placeholder: "Message",
        type: "text",
        name: "message"
    }), /*#__PURE__*/ React.createElement("input", {
        className: "button",
        id: "submit",
        value: "Submit",
        type: "submit"
    })))));
}; /*********************** Footer Component ***********************/
const Footer = props => {
    return /*#__PURE__*/ (React.createElement("footer", null, /*#__PURE__*/ React.createElement("div", {
        className: "wrapper"
    }, /*#__PURE__*/ React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/ React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Bad Boy"), /*#__PURE__*/ React.createElement(SocialLinks, null))));
}; /*********************** Social Links Component ***********************/
const SocialLinks = props => {
    return /*#__PURE__*/ (React.createElement("div", {
        className: "social"
    }, /*#__PURE__*/ React.createElement("a", {
        href: "https://twitter.com/BadBoyGoesBrr",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to Twitter Profile"
    }, ' ', /*#__PURE__*/ React.createElement("i", {
        className: "fab fa-twitter"
    })), /*#__PURE__*/ React.createElement("a", {
        id: "profile-link",
        href: "https://github.com/bad-boy-codes",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to GitHub Profile"
    }, ' ', /*#__PURE__*/ React.createElement("i", {
        className: "fab fa-github"
    })), /*#__PURE__*/ React.createElement("a", {
        href: "https://badboy.is-a.dev/discord",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to Discord Server"
    }, ' ', /*#__PURE__*/ React.createElement("i", {
        className: "fab fa-discord"
    }))));
}; /*********************** Main Component ***********************/
class App extends React.Component {
    constructor(...args) {
        super(...args);
        _defineProperty(this, "state", {
            menuState: false
        });
        _defineProperty(this, "toggleMenu", () => {
            this.setState(state => ({
                menuState: !state.menuState ? 'active' : state.menuState === 'deactive' ? 'active' : 'deactive'
            }));
        });
    }
    render() {
        return /*#__PURE__*/ (React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Menu, {
            toggleMenu: this.toggleMenu,
            showMenu: this.state.menuState
        }), /*#__PURE__*/ React.createElement(Nav, {
            toggleMenu: this.toggleMenu,
            showMenu: this.state.menuState
        }), /*#__PURE__*/ React.createElement(Header, null), /*#__PURE__*/ React.createElement(About, null), /*#__PURE__*/ React.createElement(Projects, null), /*#__PURE__*/ React.createElement(Contact, null), /*#__PURE__*/ React.createElement(Footer, null)));
    }
    componentDidMount() {
        const navbar = document.querySelector('#navbar');
        const header = document.querySelector('#welcome-section');
        const forest = document.querySelector('.forest');
        const silhouette = document.querySelector('.silhouette');
        let forestInitPos = -300;
        window.onscroll = () => {
            let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollPos <= window.innerHeight) {
                silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
                forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
            }
            if (scrollPos - 100 <= window.innerHeight) header.style.visibility = header.style.visibility === 'hidden' && 'visible';
            else header.style.visibility = 'hidden';
            if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
            else navbar.classList.remove('bg-active');
        };
        (function navSmoothScrolling() {
            const internalLinks = document.querySelectorAll('a[href^="#"]');
            for (let i in internalLinks) {
                if (internalLinks.hasOwnProperty(i)) {
                    internalLinks[i].addEventListener('click', e => {
                        e.preventDefault();
                        document.querySelector(internalLinks[i].hash).scrollIntoView({
                            block: 'start',
                            behavior: 'smooth'
                        });
                    });
                }
            }
        })();
    }
}
ReactDOM.render( /*#__PURE__*/ React.createElement(App, null), document.getElementById('app'));
