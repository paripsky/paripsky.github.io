import React from 'react';

import styles from './RainbowText.module.css';

type Props = {
  text: string;
  viewBox?: string;
};

/**
 * Credit to: https://codepen.io/cesar2535/pen/ByYXpN
 */
const RainbowText = ({ text, viewBox }: Props) => {
  const textClass = styles.text;
  const symbolId = `symbol_${text}`;
  const symbolSelector = `#${symbolId}`;

  return (
    <svg className={styles.svg} viewBox={viewBox || '0 0 auto auto'}>
      {/* Symbol*/}
      <symbol id={symbolId}>
        <text textAnchor="middle" x="50%" y="50%">
          {text}
        </text>
      </symbol>
      {/* Duplicate symbols*/}
      <use className={textClass} xlinkHref={symbolSelector} />
      <use className={textClass} xlinkHref={symbolSelector} />
      <use className={textClass} xlinkHref={symbolSelector} />
      <use className={textClass} xlinkHref={symbolSelector} />
      <use className={textClass} xlinkHref={symbolSelector} />
    </svg>
  );
};

export default RainbowText;
