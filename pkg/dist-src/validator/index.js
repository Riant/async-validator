import string from './string.js';
import method from './method.js';
import number from './number.js';
import _boolean from './boolean.js';
import regexp from './regexp.js';
import integer from './integer.js';
import _float from './float.js';
import array from './array.js';
import object from './object.js';
import enumValidator from './enum.js';
import pattern from './pattern.js';
import date from './date.js';
import required from './required.js';
import type from './type.js';
export default {
  string: string,
  method: method,
  number: number,
  boolean: _boolean,
  regexp: regexp,
  integer: integer,
  float: _float,
  array: array,
  object: object,
  enum: enumValidator,
  pattern: pattern,
  date: date,
  url: type,
  hex: type,
  email: type,
  required: required,
};
