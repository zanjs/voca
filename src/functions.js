/* eslint sort-imports: "off" */

/**
 * Functions to change the case
 * @namespace Case
 */
import camelCase from './case/camel_case';
import capitalize from './case/capitalize';
import decapitalize from './case/decapitalize';
import kebabCase from './case/kebab_case';
import lowerCase from './case/lower_case';
import snakeCase from './case/snake_case';
import upperCase from './case/upper_case';
import truncate from './cut/truncate';

/**
 * Chain functions
 * @namespace Chain
 */

/**
 * Functions to cut a string
 * @namespace Cut
 */
import charAt from './cut/char_at';
import first from './cut/first';
import graphemeAt from './cut/grapheme_at';
import last from './cut/last';
import prune from './cut/prune';
import slice from './cut/slice';
import substr from './cut/substr';
import substring from './cut/substring';

/**
 * Functions to count characters in a string
 * @namespace Count
 */
import count from './count/count';
import countGrapheme from './count/count_grapheme';
import countSubstring from './count/count_substring';
import countWhere from './count/count_where';

/**
 * Functions to format
 * @namespace Format
 */
import sprintf from './format/sprintf';
import vprintf from './format/vprintf';

/**
 * Functions to escape RegExp special characters
 * @namespace Escape
 */
import escapeHtml from './escape/escape_html';
import escapeRegExp from './escape/escape_reg_exp';
import unescapeHtml from './escape/unescape_html';

/**
 * Functions to find index
 * @namespace Index
 */
import indexOf from './index/index_of';
import lastIndexOf from './index/last_index_of';
import search from './index/search';

/**
 * Functions to manipulate a string
 * @namespace Manipulate
 */
import latinise from './manipulate/latinise';
import pad from './manipulate/pad';
import padLeft from './manipulate/pad_left';
import padRight from './manipulate/pad_right';
import repeat from './manipulate/repeat';
import replace from './manipulate/replace';
import replaceAll from './manipulate/replace_all';
import reverse from './manipulate/reverse';
import reverseGrapheme from './manipulate/reverse_grapheme';
import slugify from './manipulate/slugify';
import trim from './manipulate/trim';
import trimLeft from './manipulate/trim_left';
import trimRight from './manipulate/trim_right';

/**
 * Functions to query a string
 * @namespace Query
 */
import endsWith from './query/ends_with';
import includes from './query/includes';
import isAlpha from './query/is_alpha';
import isAlphaDigit from './query/is_alpha_digit';
import isBlank from './query/is_blank';
import isDigit from './query/is_digit';
import isEmpty from './query/is_empty';
import isLowerCase from './query/is_lower_case';
import isNumeric from './query/is_numeric';
import isString from './query/is_string';
import isUpperCase from './query/is_upper_case';
import matches from './query/matches';
import startsWith from './query/starts_with';

/**
 * Functions to split a string
 * @namespace Split
 */
import chars from './split/chars';
import graphemes from './split/graphemes';
import split from './split/split';
import words from './split/words';

/**
 * Util functions and properties
 * @namespace Util
 */
import noConflict from './util/no_conflict';
import version from './util/version';

export default {
  camelCase,
  capitalize,
  decapitalize,
  kebabCase,
  lowerCase,
  snakeCase,
  upperCase,

  count,
  countGrapheme,
  countSubstring,
  countWhere,

  escapeHtml,
  escapeRegExp,
  unescapeHtml,

  sprintf,
  vprintf,

  indexOf,
  lastIndexOf,
  search,

  charAt,
  first,
  graphemeAt,
  last,
  prune,
  slice,
  substr,
  substring,
  truncate,

  latinise,
  pad,
  padLeft,
  padRight,
  repeat,
  replace,
  replaceAll,
  reverse,
  reverseGrapheme,
  slugify,
  trim,
  trimLeft,
  trimRight,

  endsWith,
  includes,
  isAlpha,
  isAlphaDigit,
  isBlank,
  isDigit,
  isEmpty,
  isLowerCase,
  isNumeric,
  isString,
  isUpperCase,
  matches,
  startsWith,

  chars,
  graphemes,
  split,
  words,

  noConflict,
  version
};