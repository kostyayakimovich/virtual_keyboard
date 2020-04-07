/* eslint-disable max-len */
const valuesFistRow = [
  {
    symbol: "ё", symbolEn: "`", extaSymbolEn: "~", keycode: "Backquote"
  },
  {
    symbol: "1", extaSymbol: "!", extaSymbolEn: "!", keycode: "Digit1"
  },
  {
    symbol: "2",

    extaSymbol: "@",
    extaSymbolEn: "@",
    keycode: "Digit2"
  },
  {
    symbol: "3", extaSymbol: "№", extaSymbolEn: "#", keycode: "Digit3"
  },
  {
    symbol: "4", extaSymbol: ";", extaSymbolEn: "$", keycode: "Digit4"
  },
  {
    symbol: "5", extaSymbol: "%", extaSymbolEn: "%", keycode: "Digit5"
  },
  {
    symbol: "6", extaSymbol: ":", extaSymbolEn: "^", keycode: "Digit6"
  },
  {
    symbol: "7", extaSymbol: "?", extaSymbolEn: "&", keycode: "Digit7"
  },
  {
    symbol: "8", extaSymbol: "*", extaSymbolEn: "*", keycode: "Digit8"
  },
  {
    symbol: "9", extaSymbol: "(", extaSymbolEn: "(", keycode: "Digit9"
  },
  {
    symbol: "0", extaSymbol: ")", extaSymbolEn: ")", keycode: "Digit0"
  },
  {
    symbol: "-", extaSymbol: "_", extaSymbolEn: "_", keycode: "Minus"
  },
  {
    symbol: "=", extaSymbol: "+", extaSymbolEn: "+", keycode: "Equal"
  },
  { symbol: "Backspace", btnSize: 100, keycode: "Backspace" }
];
const valuesSecondRow = [
  { symbol: "Tab", btnSize: 110, keycode: "Tab" },
  { symbol: "й", symbolEn: "q", keycode: "KeyQ" },
  { symbol: "ц", symbolEn: "w", keycode: "KeyW" },
  { symbol: "у", symbolEn: "e", keycode: "KeyE" },
  { symbol: "к", symbolEn: "r", keycode: "KeyR" },
  { symbol: "е", symbolEn: "t", keycode: "KeyT" },
  { symbol: "н", symbolEn: "y", keycode: "KeyY" },
  { symbol: "г", symbolEn: "u", keycode: "KeyU" },
  { symbol: "ш", symbolEn: "i", keycode: "KeyI" },
  { symbol: "щ", symbolEn: "o", keycode: "KeyO" },
  { symbol: "з", symbolEn: "p", keycode: "KeyP" },
  {
    symbol: "х", symbolEn: "[", extaSymbolEn: "{", keycode: "BracketLeft"
  },
  {
    symbol: "ъ", symbolEn: "]", extaSymbolEn: "}", keycode: "BracketRight"
  },
  {
    symbol: "\\",
    extaSymbol: "/",
    extaSymbolEn: "|",
    btnSize: 70,
    keycode: "Backslash"
  }
];
const valuesThirdRow = [
  { symbol: "Capslock", btnSize: 110, keycode: "CapsLock" },
  { symbol: "ф", symbolEn: "a", keycode: "KeyA" },
  { symbol: "ы", symbolEn: "s", keycode: "KeyS" },
  { symbol: "в", symbolEn: "d", keycode: "KeyD" },
  { symbol: "а", symbolEn: "f", keycode: "KeyF" },
  { symbol: "п", symbolEn: "g", keycode: "KeyG" },
  { symbol: "р", symbolEn: "h", keycode: "KeyH" },
  { symbol: "о", symbolEn: "j", keycode: "KeyJ" },
  { symbol: "л", symbolEn: "k", keycode: "KeyK" },
  { symbol: "д", symbolEn: "l", keycode: "KeyL" },
  {
    symbol: "ж", symbolEn: ";", extaSymbolEn: ":", keycode: "Semicolon"
  },
  {
    symbol: "э", symbolEn: "'", extaSymbolEn: "\"", keycode: "Quote"
  },
  { symbol: "Enter", btnSize: 113, keycode: "Enter" }
];
const valuesFourthRow = [
  { symbol: "Shift", btnSize: 140, keycode: "ShiftLeft" },
  { symbol: "я", symbolEn: "z", keycode: "KeyZ" },
  { symbol: "ч", symbolEn: "x", keycode: "KeyX" },
  { symbol: "с", symbolEn: "c", keycode: "KeyC" },
  { symbol: "м", symbolEn: "v", keycode: "KeyV" },
  { symbol: "и", symbolEn: "b", keycode: "KeyB" },
  { symbol: "т", symbolEn: "n", keycode: "KeyN" },
  { symbol: "ь", symbolEn: "m", keycode: "KeyM" },
  {
    symbol: "б", symbolEn: ",", extaSymbolEn: "<", keycode: "Comma"
  },
  {
    symbol: "ю", symbolEn: ".", extaSymbolEn: ">", keycode: "Period"
  },
  {
    symbol: ".",
    extaSymbol: ",",
    symbolEn: "/",
    extaSymbolEn: "?",
    keycode: "Slash"
  },
  { symbol: "▲", keycode: "ArrowUp" },
  { symbol: "Shift", btnSize: 100, keycode: "ShiftRight" }
];
const valuesFifthRow = [
  { symbol: "Ctrl", btnSize: 60, keycode: "ControlLeft" },

  { symbol: "Win", keycode: "MetaLeft" },
  { symbol: "Alt", keycode: "AltLeft" },
  { symbol: " ", btnSize: 290, keycode: "Space" },
  { symbol: "Alt", keycode: "AltRight" },
  { symbol: "Ctrl", keycode: "ControlRight" },
  { symbol: "◄", keycode: "ArrowLeft" },
  { symbol: "▼", keycode: "ArrowDown" },
  { symbol: "►", keycode: "ArrowRight" },
  { symbol: "menu", btnSize: 60, keycode: "ContextMenu" }
];
// init mains tags
const main = document.createElement("div");
main.setAttribute("id", "main");
main.className = "main";
const info = document.createElement("div");
info.className = "infoChangeLang";
const textInfo = document.createElement("p");
textInfo.className = "textInfoChangeLang";
textInfo.textContent = "you can switch the language using the shift and alt keys ";
const textOS = document.createElement("p");
textOS.className = "textOS";
textOS.textContent = "made in windows os";
const body = document.getElementsByTagName("body");
body[0].append(main);
info.append(textInfo);
info.append(textOS);
const textarea = document.createElement("textarea");
textarea.className = "input_textarea";
textarea.setAttribute("name", "message");
textarea.setAttribute("id", "textarea");
textarea.setAttribute("cols", "30");
textarea.setAttribute("rows", "10");
textarea.setAttribute("placeholder", "repeat keyboard");
const sectionKeyboard = document.createElement("section");
sectionKeyboard.className = "keyboard_area";
sectionKeyboard.setAttribute("id", "keyboardArea");
main.append(textarea);
main.append(sectionKeyboard);
main.append(info);
const spanExtraBackquote = document.createElement("span");
spanExtraBackquote.className = "extra_symbol";
const spanExtraBracketLeft = document.createElement("span");
spanExtraBracketLeft.className = "extra_symbol";
const spanExtraBracketRight = document.createElement("span");
spanExtraBracketRight.className = "extra_symbol";
const semicolon = document.createElement("span");
semicolon.className = "extra_symbol";
const quote = document.createElement("span");
quote.className = "extra_symbol";
const comma = document.createElement("span");
comma.className = "extra_symbol";
const period = document.createElement("span");
period.className = "extra_symbol";
// paint keyboard
const paintKeyboardArea = (arrayForPaint, classRow, switchLang) => {
  const row = document.createElement("div");
  row.className = `${classRow}`;
  sectionKeyboard.append(row);
  arrayForPaint.forEach((item) => {
    const {
      keycode, btnSize, symbol, extaSymbol, symbolEn, extaSymbolEn
    } = item;
    const button = document.createElement("button");
    button.className = "btn";
    if (keycode === "Backquote") button.setAttribute("id", "btnBackquote");
    if (keycode === "BracketLeft") button.setAttribute("id", "btnBracketLeft");
    if (keycode === "BracketRight") button.setAttribute("id", "btnBracketRight");
    if (keycode === "Semicolon") button.setAttribute("id", "btnSemicolon");
    if (keycode === "Quote") button.setAttribute("id", "btnQuote");
    if (keycode === "Comma") button.setAttribute("id", "btnComma");
    if (keycode === "Period") button.setAttribute("id", "btnPeriod");
    button.setAttribute("value", `${keycode}`);
    if (btnSize) button.style.width = `${btnSize}px`;

    const spanLetter = document.createElement("span");
    const spanExtraSymbol = document.createElement("span");

    if (switchLang) {
      spanLetter.className = "letter";
      spanLetter.innerHTML = symbol;
      button.append(spanLetter);
      if (extaSymbol && symbol) {
        spanExtraSymbol.className = "extra_symbol";
        spanExtraSymbol.innerHTML = extaSymbol;
        button.append(spanExtraSymbol);
      }
    } else {
      spanLetter.className = "letter";
      if (symbolEn) {
        spanLetter.innerHTML = symbolEn;
      } else {
        spanLetter.innerHTML = symbol;
      }

      button.append(spanLetter);
      if (extaSymbolEn) {
        spanExtraSymbol.className = "extra_symbol";
        spanExtraSymbol.innerHTML = extaSymbolEn;
        button.append(spanExtraSymbol);
      }
    }
    row.append(button);
  });
};
// check session
const langFind = sessionStorage.getItem("russian");
let switchSession = true;
if (langFind === null || langFind === "russian") {
  switchSession = true;
} else {
  switchSession = false;
}
// paint rows
paintKeyboardArea(valuesFistRow, "first_row", switchSession);
paintKeyboardArea(valuesSecondRow, "second_row", switchSession);
paintKeyboardArea(valuesThirdRow, "third_row", switchSession);
paintKeyboardArea(valuesFourthRow, "fourth_row", switchSession);
paintKeyboardArea(valuesFifthRow, "fifth_row", switchSession);

let shiftOn = false;
let altOn = false;
let collectionExtraSymbols;
let collectionSymbols;
let capsLockOn = false;

// get collections letters and extra symbols
window.addEventListener("load", () => {
  const items = document.getElementsByClassName("letter");
  collectionSymbols = items;
});

window.addEventListener("load", () => {
  const items = document.getElementsByClassName("extra_symbol");
  collectionExtraSymbols = items;
});

document.addEventListener("keydown", ({ code }) => {
  const lang = sessionStorage.getItem("language");
  const language = lang === null ? "russian" : lang;
  if (code === "ShiftLeft" || code === "ShiftRight") {
    shiftOn = true;
  }
  if (code === "AltLeft" || code === "AltRight") {
    altOn = true;
  }
  sectionKeyboard.querySelectorAll(".btn").forEach((item) => {
    const {
      value, textContent
    } = item;

    if (value === code) {
      item.classList.add("active");
      if (code === "Backspace" || code === "Enter" || code === "Del") {
        textarea.focus();
      } else if (code === "ControlLeft" || code === "ControlRight"
        || code === "MetaLeft" || code === "AltLeft" || code === "AltRight"
        || code === "ContextMenu"
        || code === "ShiftLeft" || code === "ShiftRight") {
        textarea.blur();
        textarea.value += "";
      } else if (code === "Tab") {
        textarea.blur();
        textarea.value += "     ";
      } else if (code === "Space") {
        textarea.blur();
        textarea.value += " ";
      } else if (code === "CapsLock") {
        if (capsLockOn) capsLockOn = false;
        else capsLockOn = true;
      } else if (capsLockOn || shiftOn) {
        textarea.blur();
        if (textContent[1] === undefined) {
          textarea.value += textContent[0].toUpperCase();
        } else { textarea.value += textContent[1]; }
      } else {
        textarea.blur();
        textarea.value += textContent[0];
      }
    }
  });
  if (shiftOn && altOn) {
    if (language === "russian") {
      sessionStorage.setItem("language", "english");

      const btnBackquote = document.getElementById("btnBackquote");
      spanExtraBackquote.innerHTML = valuesFistRow[0].extaSymbolEn;
      btnBackquote.append(spanExtraBackquote);
      const btnBracketLeft = document.getElementById("btnBracketLeft");
      spanExtraBracketLeft.innerHTML = valuesSecondRow[11].extaSymbolEn;
      btnBracketLeft.append(spanExtraBracketLeft);
      const btnBracketRight = document.getElementById("btnBracketRight");
      spanExtraBracketRight.innerHTML = valuesSecondRow[12].extaSymbolEn;
      btnBracketRight.append(spanExtraBracketRight);
      const btnSemicolon = document.getElementById("btnSemicolon");
      semicolon.innerHTML = valuesThirdRow[10].extaSymbolEn;
      btnSemicolon.append(semicolon);
      const btnQuote = document.getElementById("btnQuote");
      quote.innerHTML = valuesThirdRow[11].extaSymbolEn;
      btnQuote.append(quote);
      const btnComma = document.getElementById("btnComma");
      comma.innerHTML = valuesFourthRow[8].extaSymbolEn;
      btnComma.append(comma);
      const btnPeriod = document.getElementById("btnPeriod");
      period.innerHTML = valuesFourthRow[9].extaSymbolEn;
      btnPeriod.append(period);
      const arrExstraSymbols = [...collectionExtraSymbols];
      const arrSymbols = [...collectionSymbols];
      for (let i = 0; i < arrExstraSymbols.length; i += 1) {
        const firstRow = valuesFistRow.find(({ extaSymbol }) => extaSymbol === arrExstraSymbols[i].textContent);
        const secondRow = valuesSecondRow.find(({ extaSymbol }) => extaSymbol === arrExstraSymbols[i].textContent);
        const thirdRow = valuesThirdRow.find(({ extaSymbol }) => extaSymbol === arrExstraSymbols[i].textContent);
        const fourthRow = valuesFourthRow.find(({ extaSymbol }) => extaSymbol === arrExstraSymbols[i].textContent);
        if (firstRow && firstRow.extaSymbolEn) {
          collectionExtraSymbols[i].innerHTML = firstRow.extaSymbolEn;
        }
        if (secondRow && secondRow.extaSymbolEn) {
          collectionExtraSymbols[i].innerHTML = secondRow.extaSymbolEn;
        }
        if (thirdRow && thirdRow.extaSymbolEn) {
          collectionExtraSymbols[i].innerHTML = thirdRow.extaSymbolEn;
        }
        if (fourthRow && fourthRow.extaSymbolEn) {
          collectionExtraSymbols[i].innerHTML = fourthRow.extaSymbolEn;
        }
        collectionExtraSymbols[0].innerHTML = valuesFistRow[0].extaSymbolEn;
      }
      for (let i = 0; i < arrSymbols.length; i += 1) {
        const firstRow = valuesFistRow.find(({ symbol }) => symbol === arrSymbols[i].textContent);
        const secondRow = valuesSecondRow.find(({ symbol }) => symbol === arrSymbols[i].textContent);
        const thirdRow = valuesThirdRow.find(({ symbol }) => symbol === arrSymbols[i].textContent);
        const fourthRow = valuesFourthRow.find(({ symbol }) => symbol === arrSymbols[i].textContent);
        if (firstRow && firstRow.symbolEn) {
          collectionSymbols[i].innerHTML = firstRow.symbolEn;
        }
        if (secondRow && secondRow.symbolEn) {
          collectionSymbols[i].innerHTML = secondRow.symbolEn;
        }
        if (thirdRow && thirdRow.symbolEn) {
          collectionSymbols[i].innerHTML = thirdRow.symbolEn;
        }
        if (fourthRow && fourthRow.symbolEn) {
          collectionSymbols[i].innerHTML = fourthRow.symbolEn;
        }
      }
    } else {
      sessionStorage.setItem("language", "russian");
      spanExtraBackquote.innerHTML = "";
      spanExtraBracketLeft.innerHTML = "";
      spanExtraBracketRight.innerHTML = "";
      semicolon.innerHTML = "";
      quote.innerHTML = "";
      comma.innerHTML = "";
      period.innerHTML = "";
      const arrExtraSymbolsChange = [...collectionExtraSymbols];
      const arrSymbolsChange = [...collectionSymbols];
      for (let i = 0; i < arrExtraSymbolsChange.length; i += 1) {
        const firstRow = valuesFistRow.find(({ extaSymbolEn }) => extaSymbolEn === arrExtraSymbolsChange[i].textContent);
        const secondRow = valuesSecondRow.find(({ extaSymbolEn }) => extaSymbolEn === arrExtraSymbolsChange[i].textContent);
        const thirdRow = valuesThirdRow.find(({ extaSymbolEn }) => extaSymbolEn === arrExtraSymbolsChange[i].textContent);
        const fourthRow = valuesFourthRow.find(({ extaSymbolEn }) => extaSymbolEn === arrExtraSymbolsChange[i].textContent);
        if (firstRow && firstRow.extaSymbol) {
          collectionExtraSymbols[i].innerHTML = firstRow.extaSymbol;
        }
        if (secondRow && secondRow.extaSymbol) {
          collectionExtraSymbols[i].innerHTML = secondRow.extaSymbol;
        }
        if (thirdRow && thirdRow.extaSymbol) {
          collectionExtraSymbols[i].innerHTML = thirdRow.extaSymbol;
        }
        if (fourthRow && fourthRow.extaSymbol) {
          collectionExtraSymbols[i].innerHTML = fourthRow.extaSymbol;
        }
      }

      for (let i = 0; i < arrSymbolsChange.length; i += 1) {
        const firstRow = valuesFistRow.find(({ symbolEn }) => symbolEn === arrSymbolsChange[i].textContent);
        const secondRow = valuesSecondRow.find(({ symbolEn }) => symbolEn === arrSymbolsChange[i].textContent);
        const thirdRow = valuesThirdRow.find(({ symbolEn }) => symbolEn === arrSymbolsChange[i].textContent);
        const fourthRow = valuesFourthRow.find(({ symbolEn }) => symbolEn === arrSymbolsChange[i].textContent);
        if (firstRow && firstRow.symbol) {
          collectionSymbols[i].innerHTML = firstRow.symbol;
        }
        if (secondRow && secondRow.symbol) {
          collectionSymbols[i].innerHTML = secondRow.symbol;
        }
        if (thirdRow && thirdRow.symbol) {
          collectionSymbols[i].innerHTML = thirdRow.symbol;
        }
        if (fourthRow && fourthRow.symbol) {
          collectionSymbols[i].innerHTML = fourthRow.symbol;
        }
      }
    }
    shiftOn = false;
    altOn = false;
  }
});

document.addEventListener("keyup", ({ code }) => {
  textarea.focus();
  sectionKeyboard.querySelectorAll(".btn").forEach((item) => {
    if (item.value === code) {
      item.classList.remove("active");
    }
  });
  if (code === "ShiftLeft" || code === "ShiftRight") {
    shiftOn = false;
  }
  if (code === "AltLeft" || code === "AltRight") {
    altOn = false;
  }
});
