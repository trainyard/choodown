const marked = require('marked');
const html = require('choo/html');

const PREVIEW = 'PREVIEW';
const EDIT = 'EDIT';

module.exports = function (opts) {
  const el = document.createElement('div');

  el.innerHTML = marked(opts.text);
  const reveal = opts.mode === PREVIEW ? el :
    html`<textarea oninput=${opts.onChange}>${opts.text}</textarea>`;

      return html`
      <div>
        <div>mode: ${opts.mode}</div>
        <button onclick=${opts.onToggle}>switch</button>
        <div>
        ${reveal}
        </div>
      </div>
    `
}
