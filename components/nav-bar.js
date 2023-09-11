customElements.define("nav-a", class extends HTMLElement {
    connectedCallback() {
        setTimeout(() => { // make sure innerHTML is parsed
            let startLink = "./"
            if (location.href.includes("index")) {
                startLink = "./pages/"
            }
            let klass = "navbar-item is-tab"
            let href = this.getAttribute("file");
            const title = this.getAttribute("title")
            if (location.href.includes(href) && title != "Ballons-ailleurs") {
                const drop = this.getAttribute("id-drop")
                if (drop) {
                    document.querySelector(`#${drop}`).classList.add("is-active")
                }
                klass = "navbar-item is-tab is-active";
            }
            this.innerHTML = `<a class="${klass}" href="${startLink + href}.html">${title}</a>`;
        });
    }
});

class navBar extends HTMLElement {
    constructor() {
        super();

    }

    connectedCallback() {
        // le navigateur appelle cette méthode lorsque l'élément est ajouté au document
        // elle peut-être appelé autant de fois que lélément est ajouté ou supprimé)
        const nav = document.createElement("nav")
        nav.classList.add("navbar", "is-dark")
        nav.innerHTML = `
    <div class="navbar-brand">
        <nav-a file="index" title="Ballons-ailleurs"></nav-a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div class="navbar-menu" id="navbarMenu">
        <div class="navbar-start">
        </div>
        <div class="navbar-end is-tab">
            <nav-a file="index" title="Accueil"></nav-a>
            <div class="navbar-item has-dropdown">
                <a class="navbar-link" href="#" id="asso-drop">
                    Associations
                </a>

                <div class="navbar-dropdown">
                    <nav-a file="associations_Haute-Garrone" title="Haute-Garonne" id-drop="asso-drop"></nav-a>
                    <nav-a file="associations_Sud_Aveyron" title="Sud-Aveyron" id-drop="asso-drop"></nav-a>
                </div>
            </div>
            <div class="navbar-item has-dropdown">
                <a class="navbar-link" href="#" id="montgolfiades-drop">
                    Montgolfiades
                </a>

                <div class="navbar-dropdown">
                    <nav-a file="montgolfiade" title="Présentation" id-drop="montgolfiades-drop"></nav-a>
                    <nav-a file="reglement-concours" title="Concours de photographie"  id-drop="montgolfiades-drop"></nav-a>
                    <nav-a file="planning_activite" title="Planning" id-drop="montgolfiades-drop"></nav-a>
                </div>
            </div>
            <nav-a file="vols_decouverte" title="Vols Découverte"></nav-a>
            <nav-a file="galerie" title="Galerie"></nav-a>
            <nav-ahref="partenaire_&_liens" title="Partenaires & Liens"></nav-a>
        </div>
    </div>`
        this.appendChild(nav)
    }
}

customElements.define("nav-bar", navBar)