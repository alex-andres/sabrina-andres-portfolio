import React from 'react';
import Teaser from './teaser';
import useTeasers from '../hooks/use-teasers';

export default () => {
  const teasers = useTeasers();
  return (
    <div>
      {teasers.map(teaser => (
        <Teaser key={teaser.id} teaser={teaser} />
      ))}
    </div>
  );
};
