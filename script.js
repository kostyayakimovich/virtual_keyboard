const valuesFistRow = [
  { symbol: "ё", symbolEn: "`", extaSymbolEn: "~" },
  { symbol: "1", extaSymbol: "!", extaSymbolEn: "!" },
  { symbol: "2", extaSymbol: '"', symbolEn: "", extaSymbolEn: "@" },
  { symbol: "3", extaSymbol: "№", extaSymbolEn: "#" },
  { symbol: "4", extaSymbol: ";", extaSymbolEn: "$" },
  { symbol: "5", extaSymbol: "%", extaSymbolEn: "%" },
  { symbol: "6", extaSymbol: ":", extaSymbolEn: "^" },
  { symbol: "7", extaSymbol: "?", extaSymbolEn: "&" },
  { symbol: "8", extaSymbol: "*", extaSymbolEn: "*" },
  { symbol: "9", extaSymbol: "(", extaSymbolEn: "(" },
  { symbol: "0", extaSymbol: ")", extaSymbolEn: ")" },
  { symbol: "-", extaSymbol: "_", extaSymbolEn: "_" },
  { symbol: "=", extaSymbol: "+", extaSymbolEn: "+" },
  { symbol: "Backspace", btnSize: 100 }
];
const valuesSecondRow = [
  { symbol: "Tab", btnSize: 110 },
  { symbol: "й", symbolEn: "q" },
  { symbol: "ц", symbolEn: "w" },
  { symbol: "у", symbolEn: "e" },
  { symbol: "к", symbolEn: "r" },
  { symbol: "е", symbolEn: "t" },
  { symbol: "н", symbolEn: "y" },
  { symbol: "г", symbolEn: "u" },
  { symbol: "ш", symbolEn: "i" },
  { symbol: "щ", symbolEn: "o" },
  { symbol: "з", symbolEn: "p" },
  { symbol: "х", symbolEn: "[", extaSymbolEn: "{" },
  { symbol: "ъ", symbolEn: "]", extaSymbolEn: "}" },
  { symbol: "\\", extaSymbol: "/", extaSymbolEn: "|", btnSize: 70 }
];
const valuesThirdRow = [
  { symbol: "Caps lock", btnSize: 110 },
  { symbol: "ф", symbolEn: "a" },
  { symbol: "ы", symbolEn: "s" },
  { symbol: "в", symbolEn: "d" },
  { symbol: "а", symbolEn: "f" },
  { symbol: "п", symbolEn: "g" },
  { symbol: "р", symbolEn: "h" },
  { symbol: "о", symbolEn: "j" },
  { symbol: "л", symbolEn: "k" },
  { symbol: "д", symbolEn: "l" },
  { symbol: "ж", symbolEn: ";", extaSymbolEn: ":" },
  { symbol: "э", symbolEn: "'", extaSymbolEn: '"' },
  { symbol: "Enter", btnSize: 113 }
];
const valuesfourthRow = [
  { symbol: "Shift", btnSize: 140 },
  { symbol: "я", symbolEn: "z" },
  { symbol: "ч", symbolEn: "x" },
  { symbol: "с", symbolEn: "c" },
  { symbol: "м", symbolEn: "v" },
  { symbol: "и", symbolEn: "b" },
  { symbol: "т", symbolEn: "n" },
  { symbol: "ь", symbolEn: "m" },
  { symbol: "б", symbolEn: ",", extaSymbolEn: "<" },
  { symbol: "ю", symbolEn: ".", extaSymbolEn: ">" },
  { symbol: ".", extaSymbol: ",", symbolEn: "/", extaSymbolEn: "?" },
  { symbol: "up" },
  { symbol: "Shift", btnSize: 100 }
];
const valuesFifthRow = [
  { symbol: "Ctrl", btnSize: 60 },
  { symbol: "Fn" },
  { symbol: "Win" },
  { symbol: "Alt" },
  { symbol: " ", btnSize: 250 },
  { symbol: "Alt" },

  { symbol: "Ctrl" },
  { symbol: "left" },
  { symbol: "down" },
  { symbol: "right" },
  { symbol: "Doc", btnSize: 60 }
];
const main = document.getElementById("main");

const sectionKeyboard = document.createElement("section");
sectionKeyboard.className = "keyboard_area";
main.append(sectionKeyboard);
function paintKeyboardArea(array, classRow) {
  let row = document.createElement("div");
  row.className = `${classRow}`;
  sectionKeyboard.append(row);
  array.forEach(function(item) {
    let button = document.createElement("button");
    button.innerHTML = item.symbol;
    button.className = "btn";
    if (item.btnSize) button.style.width = `${item.btnSize}px`;
    if (item.extaSymbol) {
      let span = document.createElement("span");
      span.className = "extra_symbal";
      span.innerHTML = item.extaSymbol;
      button.append(span);
    }
    row.append(button);
  });
}
paintKeyboardArea(valuesFistRow, "first_row");
paintKeyboardArea(valuesSecondRow, "second_row");
paintKeyboardArea(valuesThirdRow, "third_row");
paintKeyboardArea(valuesfourthRow, "fourth_row");
paintKeyboardArea(valuesFifthRow, "fifth_row");
