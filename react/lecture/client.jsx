// const React = require('react');
// const ReactDom = require('react-dom');
import React from 'react';
import ReactDom from 'react-dom';

import NumberBaseball from './NumberBaseball';

const Hot = hot(NumberBaseball); // hot을 씌우면 실시간으로 반영됨

ReactDom.render(<Hot />, document.querySelector('#root'));
