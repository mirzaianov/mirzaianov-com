import Language from './Language';

const LanguagesList = () => {
  return (
    <div className="flex flex-col">
      <Language
        language={'English'}
        level={'Advanced C1 • IELTS 7.5'}
      />
      <Language
        language={'Turkish'}
        level={'Beginner A2'}
      />
      <Language
        language={'Russian'}
        level={'Native'}
      />
      <Language
        language={'Tatar'}
        level={'Native'}
      />
    </div>
  );
};

export default LanguagesList;
