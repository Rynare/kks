class SVGFromFile extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.renderSVG();
    }

    renderSVG() {
        const src = this.getAttribute("src");
        if (src) {
            fetch(src)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Network response was not ok: ${response.statusText}`);
                    }
                    return response.text();
                })
                .then(svg => {
                    this.innerHTML = svg;
                    this.normalizeSVG()
                })
                .catch(err => console.error('Failed to load SVG:', err));
        }
    }

    normalizeSVG() {
        const importedSVG = this.querySelector("svg")
        importedSVG.setAttribute("width", "1em")
        importedSVG.setAttribute("height", "1em")
    }

    static get observedAttributes() {
        return ["src"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "src" && oldValue !== newValue) {
            this.renderSVG();
        }
    }
}

customElements.define("svg-from-file", SVGFromFile);
