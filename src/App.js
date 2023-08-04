import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import { T_ANIMALS, T_SENTENCES } from './constants/translations';
import { languages } from './constants/languages';

function App() {

  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {
            t(T_SENTENCES.myBirds, {count: 2}) + " " +
            t(T_ANIMALS.bird.budgie) + " " +
            t(T_ANIMALS.bird.cockatoo, {monster: "Cthulu", date: new Date()})  
          }
        </p>
        <div>
          {Object.keys(languages).map(lng => (
           <button key={lng} onClick={e => i18n.changeLanguage(lng)}>
            {languages[lng].nativeName}
           </button> 
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
