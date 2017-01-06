const choo = require('choo');
const html = require('choo/html');
const app = choo();
const Choodown = require('./choodown');

const PREVIEW = 'PREVIEW';
const EDIT = 'EDIT';

app.model({
  namespace: 'choodown',
  state: {
    text: '',
    mode: 'EDIT'
  },
  reducers: {
    updateText: (state, data) => ({text: data}),
    toggleMode: (state, data) => ({mode: state.mode === PREVIEW ? EDIT : PREVIEW})
  }
});

const mainView = (state, prev, send) => {
  const choodown = Choodown({
    text: state.choodown.text,
    mode: state.choodown.mode,
    onChange: (e) => send('choodown:updateText', e.target.value),
    onToggle: () => send('choodown:toggleMode')
  });

    return html`
    <main>
      <h1>Choodown demo</h1>
      ${choodown}
    </main>`
  };

  app.router(['/', mainView]);

const tree = app.start();
document.body.appendChild(tree);
