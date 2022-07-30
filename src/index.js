import Template from '@templates/Template.js';
import '@styles/vars.scss';
import '@styles/main.css';

(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
