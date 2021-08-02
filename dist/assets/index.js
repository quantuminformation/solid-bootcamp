import { t as template, s as setAttribute, c as createRenderEffect, r as render } from './vendor.js';

var index = "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n";

var logo$1 = "/assets/logo.123b04bc.svg";

const App$1 = "_App_ro2hj_2";
const logo = "_logo_ro2hj_6";
const header = "_header_ro2hj_12";
const link = "_link_ro2hj_23";
var styles = {
	App: App$1,
	logo: logo,
	"logo-spin": "_logo-spin_ro2hj_1",
	header: header,
	link: link
};

const _tmpl$ = template(`<div><header><img alt="logo"><p>Edit <code>src/App.jsx</code> and save to reload.</p><a href="https://github.com/solidjs/solid" target="_blank" rel="noopener noreferrer">Learn Solid</a></header></div>`);

function App() {
  return (() => {
    const _el$ = _tmpl$.cloneNode(true),
          _el$2 = _el$.firstChild,
          _el$3 = _el$2.firstChild,
          _el$4 = _el$3.nextSibling,
          _el$5 = _el$4.nextSibling;

    setAttribute(_el$3, "src", logo$1);

    createRenderEffect(_p$ => {
      const _v$ = styles.App,
            _v$2 = styles.header,
            _v$3 = styles.logo,
            _v$4 = styles.link;
      _v$ !== _p$._v$ && (_el$.className = _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && (_el$2.className = _p$._v$2 = _v$2);
      _v$3 !== _p$._v$3 && (_el$3.className = _p$._v$3 = _v$3);
      _v$4 !== _p$._v$4 && (_el$5.className = _p$._v$4 = _v$4);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });

    return _el$;
  })();
}

render(App, document.getElementById("root"));
