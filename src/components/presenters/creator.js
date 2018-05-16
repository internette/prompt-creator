import React from 'react';
import PropTypes from 'prop-types';

import AddInput from '../containers/add-input';
import ListItem from '../containers/list-item';

import '../../styles/creator.css';

const CreatorPresenter = (props) => {
  return (
    <div id="creator">
        <h1><span>Prompt Creator</span><button id="get-code">&lt;/&gt;</button><button id="how-to">?</button></h1>
        <div>
          <ul id="bash-list-items">
            {
              props.list_items.map((list_item, index)=> {
                return <ListItem key={index} attributes={list_item}/>
              })
            }
          </ul>
          <AddInput/>
        </div>
      </div>
  );
}

CreatorPresenter.propTypes = {
  list_items: PropTypes.array.isRequired
}

export default CreatorPresenter;