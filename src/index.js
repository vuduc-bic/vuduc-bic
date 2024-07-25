import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import App from './App';
import { IntlProvider } from 'react-intl';
import en from './locale/en.json';
import vi from './locale/vi.json';

const rootElement = document.getElementById('root');
let locale;

console.log(window.location.pathname);
let translationsForUsersLocale = '';
if (window.location.pathname === '/en') {
  locale = 'en';
  translationsForUsersLocale = en;
} else {
  locale = 'vi';
  translationsForUsersLocale = vi;
}

ReactDOM.render(
  <StrictMode>
    <IntlProvider locale={locale} messages={translationsForUsersLocale}>
      <App />
    </IntlProvider>
    ,
  </StrictMode>,
  rootElement
);
