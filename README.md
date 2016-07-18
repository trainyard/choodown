# Choodown

A simple markdown/textarea component with ability to preview your changes.  Made for choo.

## How to use:

```
npm install choodown -S
```

Add the following to your app model:

```javascript
app.model({
  namespace: 'choodown',
  state: {
    text: '',
    mode: 'EDIT'
  },
  reducers: {
    updateText: (data, state) => ({text: data}),
    toggleMode: (mode, state) => ({mode: state.mode === 'PREVIEW' ? 'EDIT' : 'PREVIEW'})
  }
});
```

Add to your view like this:

```javascript
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
```

## Example

You can see a full working example by cloning this repo:

1. clone this repo
2. run `npm install`
3. run `npm start`
4. go to `localhost:8080`
