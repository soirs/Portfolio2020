import React from 'react';

const Highlight = ({ children }) => {
  const renderWords = () => {
    const words = children.split(' ');
    const { length } = words;

    // return words.map((word, index) => (
    return words.map((word, index) => {
      const valid = length > 1 && index === 0;

      return (
        <span
          key={word}
          className={`highlight ${'isFirst' && valid}`}
          // className="highlight"
        >
          <span className="highlight__text">{word}</span>
          <span className="highlight__color" />
        </span>
      );
    });
  };

  return renderWords();
};
export default Highlight;
