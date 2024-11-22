// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Introduction</a></li><li class="chapter-item expanded "><a href="nfts/index.html"><strong aria-hidden="true">1.</strong> NFTs</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="nfts/normal-transfer-rules.html"><strong aria-hidden="true">1.1.</strong> Normal Transfer Rules</a></li><li class="chapter-item expanded "><a href="nfts/swap-transfer-rules.html"><strong aria-hidden="true">1.2.</strong> Swap Transfer Rules</a></li><li class="chapter-item expanded "><a href="nfts/splat-operation.html"><strong aria-hidden="true">1.3.</strong> Splat Operation</a></li></ol></li><li class="chapter-item expanded "><a href="arc20-tokens/index.html"><strong aria-hidden="true">2.</strong> ARC20 Tokens</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="arc20-tokens/normal-transfer-rules.html"><strong aria-hidden="true">2.1.</strong> Normal Transfer Rules</a></li><li class="chapter-item expanded "><a href="arc20-tokens/swap-transfer-rules.html"><strong aria-hidden="true">2.2.</strong> Swap Transfer Rules</a></li><li class="chapter-item expanded "><a href="arc20-tokens/substantiation-factor.html"><strong aria-hidden="true">2.3.</strong> Substantiation Factor</a></li></ol></li><li class="chapter-item expanded "><a href="collection-containers/index.html"><strong aria-hidden="true">3.</strong> Collection Containers</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="collection-containers/dmint-guide.html"><strong aria-hidden="true">3.1.</strong> DMINT Guide</a></li></ol></li><li class="chapter-item expanded "><a href="realm-names/index.html"><strong aria-hidden="true">4.</strong> Realm Names</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="realm-names/payname-format.html"><strong aria-hidden="true">4.1.</strong> Payname Format</a></li><li class="chapter-item expanded "><a href="realm-names/mint-sub-realms.html"><strong aria-hidden="true">4.2.</strong> Mint Sub-Realms</a></li></ol></li><li class="chapter-item expanded "><a href="rules-subrealms-and-dmint.html"><strong aria-hidden="true">5.</strong> Rules (Subrealms &amp; DMINT)</a></li><li class="chapter-item expanded "><a href="bitwork-mining.html"><strong aria-hidden="true">6.</strong> Bitwork Mining</a></li><li class="chapter-item expanded "><a href="recursion-and-references.html"><strong aria-hidden="true">7.</strong> Recursion and References</a></li><li class="chapter-item expanded "><a href="permanent-file-storage.html"><strong aria-hidden="true">8.</strong> Permanent File Storage</a></li><li class="chapter-item expanded "><a href="first-is-first-candidate-system.html"><strong aria-hidden="true">9.</strong> First is First Candidate System</a></li><li class="chapter-item expanded "><a href="faq.html"><strong aria-hidden="true">10.</strong> FAQ</a></li><li class="chapter-item expanded "><a href="reference-and-tools/specification.html"><strong aria-hidden="true">11.</strong> Specification</a></li><li class="chapter-item expanded "><a href="reference-and-tools/electrumx-api.html"><strong aria-hidden="true">12.</strong> ElectrumX API</a></li><li class="chapter-item expanded "><a href="reference-and-tools/javascript-library-cli.html"><strong aria-hidden="true">13.</strong> Javascript Library (CLI)</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
