// import _ from 'lodash';
import { cube } from './math.js';

if (process.env.NODE_EVN !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  var element = document.createElement('pre');

  // element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
  element.innerHTML = [
    'Hello webpack',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());