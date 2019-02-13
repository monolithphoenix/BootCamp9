import lodash from 'lodash';

import { pow, sum, min } from './math';
import h1 from './createDOM';

console.log(pow(2,3));

const body = document.querySelector('body');
body.append(h1);