/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = (string) => string
  .split(" ")
  .map(item => `${item[0].toUpperCase()}${item.slice(1)}`)
  .join(" ");

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export function fenceString(string){
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if((i + 1) % 2 === 0) string = replace(i, string);
  }
  return string;
}
function replace(index, string) {
  return string.substr(0, index) + string[index].toUpperCase() + string.substr(index + 1);
}
/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function(action, string){
if(action === "uppercase") return string.toUpperCase();
  else if(action === "lowercase") return string.toLowerCase();
  else if(action === "capitalize") return capitalizeString(string);
  else if(action === "fence") return fenceString(string);
  else return string;
};

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = function(action, string){
  switch(action){
    case "uppercase": return string.toUpperCase();
    case "lowercase": return string.toLowerCase();
    case "capitalize": return capitalizeString(string);
    case "fence": return fenceString(string);
    default: return string;
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = (string) => {
  for (let letter of string) {
    console.log(letter);
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = (string) => {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = (string) => {
  let i = 0;
  while (i < string.length){
    console.log(string[i++]);
  }
};


/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = (string) => string.split("").map(letter => console.log(letter));
