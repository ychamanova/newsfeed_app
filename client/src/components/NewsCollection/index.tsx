import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export const NewsCollection = () => {
  return (
    <div>
      <ButtonGroup
        variant='text'
        color='primary'
        aria-label='outlined primary button group'
      >
        <Button>Latest News</Button>
        <Button>Popular Today</Button>
        <Button>Popular in the Last Week</Button>
        <Button>Arts</Button>
        <Button>Technology</Button>
        <Button>Design</Button>
      </ButtonGroup>
    </div>
  );
};
