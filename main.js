const keys = {
  Backquote: {
    eng: { key: '`', shiftKey: '~', capsKey: '`' }, rus: { key: 'ё', shiftKey: 'Ё', capsKey: 'Ё' }, row: 0, pos: 0,
  },
  Digit1: {
    eng: { key: '1', shiftKey: '!', capsKey: '1' }, rus: { key: '1', shiftKey: '!', capsKey: '1' }, row: 0, pos: 1,
  },
  Digit2: {
    eng: { key: '2', shiftKey: '@', capsKey: '2' }, rus: { key: '2', shiftKey: '"', capsKey: '2' }, row: 0, pos: 2,
  },
  Digit3: {
    eng: { key: '3', shiftKey: '#', capsKey: '3' }, rus: { key: '3', shiftKey: '№', capsKey: '3' }, row: 0, pos: 3,
  },
  Digit4: {
    eng: { key: '4', shiftKey: '$', capsKey: '4' }, rus: { key: '4', shiftKey: ';', capsKey: '4' }, row: 0, pos: 4,
  },
  Digit5: {
    eng: { key: '5', shiftKey: '%', capsKey: '5' }, rus: { key: '5', shiftKey: '%', capsKey: '5' }, row: 0, pos: 5,
  },
  Digit6: {
    eng: { key: '6', shiftKey: '^', capsKey: '6' }, rus: { key: '6', shiftKey: ':', capsKey: '6' }, row: 0, pos: 6,
  },
  Digit7: {
    eng: { key: '7', shiftKey: '&', capsKey: '7' }, rus: { key: '7', shiftKey: '?', capsKey: '7' }, row: 0, pos: 7,
  },
  Digit8: {
    eng: { key: '8', shiftKey: '*', capsKey: '8' }, rus: { key: '8', shiftKey: '*', capsKey: '8' }, row: 0, pos: 8,
  },
  Digit9: {
    eng: { key: '9', shiftKey: '(', capsKey: '9' }, rus: { key: '9', shiftKey: '(', capsKey: '9' }, row: 0, pos: 9,
  },
  Digit0: {
    eng: { key: '0', shiftKey: ')', capsKey: '0' }, rus: { key: '0', shiftKey: ')', capsKey: '0' }, row: 0, pos: 10,
  },
  Minus: {
    eng: { key: '-', shiftKey: '_', capsKey: '-' }, rus: { key: '-', shiftKey: '_', capsKey: '-' }, row: 0, pos: 11,
  },
  Equal: {
    eng: { key: '=', shiftKey: '+', capsKey: '=' }, rus: { key: '=', shiftKey: '+', capsKey: '=' }, row: 0, pos: 12,
  },
  Backspace: { row: 0, pos: 13 },

  Tab: { row: 1, pos: 0 },
  KeyQ: {
    eng: { key: 'q', shiftKey: 'Q', capsKey: 'Q' }, rus: { key: 'й', shiftKey: 'Й', capsKey: 'Й' }, row: 1, pos: 1,
  },
  KeyW: {
    eng: { key: 'w', shiftKey: 'W', capsKey: 'W' }, rus: { key: 'ц', shiftKey: 'Ц', capsKey: 'Ц' }, row: 1, pos: 2,
  },
  KeyE: {
    eng: { key: 'e', shiftKey: 'E', capsKey: 'E' }, rus: { key: 'у', shiftKey: 'У', capsKey: 'У' }, row: 1, pos: 3,
  },
  KeyR: {
    eng: { key: 'r', shiftKey: 'R', capsKey: 'R' }, rus: { key: 'к', shiftKey: 'К', capsKey: 'К' }, row: 1, pos: 4,
  },
  KeyT: {
    eng: { key: 't', shiftKey: 'T', capsKey: 'T' }, rus: { key: 'е', shiftKey: 'Е', capsKey: 'Е' }, row: 1, pos: 5,
  },
  KeyY: {
    eng: { key: 'y', shiftKey: 'Y', capsKey: 'Y' }, rus: { key: 'н', shiftKey: 'Н', capsKey: 'Н' }, row: 1, pos: 6,
  },
  KeyU: {
    eng: { key: 'u', shiftKey: 'U', capsKey: 'U' }, rus: { key: 'г', shiftKey: 'Г', capsKey: 'Г' }, row: 1, pos: 7,
  },
  KeyI: {
    eng: { key: 'i', shiftKey: 'I', capsKey: 'I' }, rus: { key: 'ш', shiftKey: 'Ш', capsKey: 'Ш' }, row: 1, pos: 8,
  },
  KeyO: {
    eng: { key: 'o', shiftKey: 'O', capsKey: 'O' }, rus: { key: 'щ', shiftKey: 'Щ', capsKey: 'Щ' }, row: 1, pos: 9,
  },
  KeyP: {
    eng: { key: 'p', shiftKey: 'P', capsKey: 'P' }, rus: { key: 'з', shiftKey: 'З', capsKey: 'З' }, row: 1, pos: 10,
  },
  BracketLeft: {
    eng: { key: '[', shiftKey: '{', capsKey: '[' }, rus: { key: 'х', shiftKey: 'Х', capsKey: 'Х' }, row: 1, pos: 11,
  },
  BracketRight: {
    eng: { key: ']', shiftKey: '}', capsKey: ']' }, rus: { key: 'ъ', shiftKey: 'Ъ', capsKey: 'Ъ' }, row: 1, pos: 12,
  },
  Backslash: {
    eng: { key: '\\', shiftKey: '|', capsKey: '\\' }, rus: { key: '\\', shiftKey: '/', capsKey: '\\' }, row: 1, pos: 13,
  },
  Delete: { row: 1, pos: 14 },

  CapsLock: { row: 2, pos: 0 },
  KeyA: {
    eng: { key: 'a', shiftKey: 'A', capsKey: 'A' }, rus: { key: 'ф', shiftKey: 'Ф', capsKey: 'Ф' }, row: 2, pos: 1,
  },
  KeyS: {
    eng: { key: 's', shiftKey: 'S', capsKey: 'S' }, rus: { key: 'ы', shiftKey: 'Ы', capsKey: 'Ы' }, row: 2, pos: 2,
  },
  KeyD: {
    eng: { key: 'd', shiftKey: 'D', capsKey: 'D' }, rus: { key: 'в', shiftKey: 'В', capsKey: 'В' }, row: 2, pos: 3,
  },
  KeyF: {
    eng: { key: 'f', shiftKey: 'F', capsKey: 'F' }, rus: { key: 'а', shiftKey: 'А', capsKey: 'А' }, row: 2, pos: 4,
  },
  KeyG: {
    eng: { key: 'g', shiftKey: 'G', capsKey: 'G' }, rus: { key: 'п', shiftKey: 'П', capsKey: 'П' }, row: 2, pos: 5,
  },
  KeyH: {
    eng: { key: 'h', shiftKey: 'H', capsKey: 'H' }, rus: { key: 'р', shiftKey: 'Р', capsKey: 'Р' }, row: 2, pos: 6,
  },
  KeyJ: {
    eng: { key: 'j', shiftKey: 'J', capsKey: 'J' }, rus: { key: 'о', shiftKey: 'О', capsKey: 'О' }, row: 2, pos: 7,
  },
  KeyK: {
    eng: { key: 'k', shiftKey: 'K', capsKey: 'K' }, rus: { key: 'л', shiftKey: 'Л', capsKey: 'Л' }, row: 2, pos: 8,
  },
  KeyL: {
    eng: { key: 'l', shiftKey: 'L', capsKey: 'L' }, rus: { key: 'д', shiftKey: 'Д', capsKey: 'Д' }, row: 2, pos: 9,
  },
  Semicolon: {
    eng: { key: ';', shiftKey: ':', capsKey: ';' }, rus: { key: 'ж', shiftKey: 'Ж', capsKey: 'Ж' }, row: 2, pos: 10,
  },
  Quote: {
    eng: { key: '\'', shiftKey: '"', capsKey: '\'' }, rus: { key: 'э', shiftKey: 'Э', capsKey: 'Э' }, row: 2, pos: 11,
  },
  Enter: {
    row: 2, pos: 12,
  },

  ShiftLeft: { row: 3, pos: 0 },
  KeyZ: {
    eng: { key: 'z', shiftKey: 'Z', capsKey: 'Z' }, rus: { key: 'я', shiftKey: 'Я', capsKey: 'Я' }, row: 3, pos: 1,
  },
  KeyX: {
    eng: { key: 'x', shiftKey: 'X', capsKey: 'X' }, rus: { key: 'ч', shiftKey: 'Ч', capsKey: 'Ч' }, row: 3, pos: 2,
  },
  KeyC: {
    eng: { key: 'c', shiftKey: 'C', capsKey: 'C' }, rus: { key: 'с', shiftKey: 'С', capsKey: 'С' }, row: 3, pos: 3,
  },
  KeyV: {
    eng: { key: 'v', shiftKey: 'V', capsKey: 'V' }, rus: { key: 'м', shiftKey: 'М', capsKey: 'М' }, row: 3, pos: 4,
  },
  KeyB: {
    eng: { key: 'b', shiftKey: 'B', capsKey: 'B' }, rus: { key: 'и', shiftKey: 'И', capsKey: 'И' }, row: 3, pos: 5,
  },
  KeyN: {
    eng: { key: 'n', shiftKey: 'N', capsKey: 'N' }, rus: { key: 'т', shiftKey: 'Т', capsKey: 'Т' }, row: 3, pos: 6,
  },
  KeyM: {
    eng: { key: 'm', shiftKey: 'M', capsKey: 'M' }, rus: { key: 'ь', shiftKey: 'Ь', capsKey: 'Ь' }, row: 3, pos: 7,
  },
  Comma: {
    eng: { key: ',', shiftKey: '<', capsKey: ',' }, rus: { key: 'б', shiftKey: 'Б', capsKey: 'Б' }, row: 3, pos: 8,
  },
  Period: {
    eng: { key: '.', shiftKey: '>', capsKey: '.' }, rus: { key: 'ю', shiftKey: 'Ю', capsKey: 'Ю' }, row: 3, pos: 9,
  },
  Slash: {
    eng: { key: '/', shiftKey: '?', capsKey: '/' }, rus: { key: '.', shiftKey: ',', capsKey: '.' }, row: 3, pos: 10,
  },
  ArrowUp: { row: 3, pos: 11 },
  ShiftRight: { row: 3, pos: 12 },

  ControlLeft: { row: 4, pos: 0 },
  MetaLeft: { row: 4, pos: 1 },
  AltLeft: { row: 4, pos: 2 },
  Space: { row: 4, pos: 3 },
  AltRight: { row: 4, pos: 4 },
  ArrowLeft: { row: 4, pos: 5 },
  ArrowDown: { row: 4, pos: 6 },
  ArrowRight: { row: 4, pos: 7 },
  ControlRight: { row: 4, pos: 8 },
};

class Keyboard {
  constructor(keysArr) {
    this.keys = keysArr;
    this.specials = ['Backspace', 'Tab', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'ControlRight', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Delete'];
    this.state = {
      isCapsOn: false, isShiftPressed: false, lang: 'eng', caseUp: false,
    };
    this.pressed = new Set();
    this.cursorPosition = 0;
    this.textarea = null;
  }

  init() {
    this.state.lang = localStorage.getItem('lang') || 'eng';
    const body = document.querySelector('body');
    body.innerHTML = `
        <div class="container">
            <h1 class="h1">Virtual Keyboard</h1>
            <h2 class="h2">Windows version</h2>
            <textarea name="textarea" class="textarea" id="textarea" cols="30" rows="7"></textarea>
            <div class="toolbar">
              <button class="key button button_layout"></button>
              <h2 class="h2">To change layout press left Ctrl + Alt</h2>
              <button class="key button button_clear"></button>
              
            </div>
            <div class="keyboard">
                <div class="row" data-row="0"></div>
                <div class="row" data-row="1"></div>
                <div class="row" data-row="2"></div>
                <div class="row" data-row="3"></div>
                <div class="row" data-row="4"></div>
            </div>

        </div>
    `;
    const keyboardContainer = document.querySelector('.keyboard');
    /* eslint-disable-next-line */
    for (const [key, value] of Object.entries(this.keys)) {
      const keyContainer = document.createElement('div');
      const params = this.getKeyParams(key);
      const {
        keyMain, keySecond, keyMainRus, keySecondRus, classes,
      } = params;
      keyContainer.classList.add(...classes);
      keyContainer.dataset.name = key;
      keyContainer.innerHTML = `
        <span class="key__second${this.state.lang === 'rus' ? ' key_invisible' : ''}">${keySecond}</span>
        <span class="key__main${this.state.lang === 'rus' ? ' key_invisible' : ''}">${keyMain}</span>
        <span class="key__ru-second${this.state.lang === 'eng' ? ' key_invisible' : ''}">${keySecondRus}</span>
        <span class="key__ru-main${this.state.lang === 'eng' ? ' key_invisible' : ''}">${keyMainRus}</span>
      `;
      keyContainer.addEventListener('mousedown', () => this.keyPressHandler(key));
      keyContainer.addEventListener('mouseup', () => this.keyUnPressHandler(key));
      keyboardContainer.querySelector(`[data-row="${value.row}"]`).appendChild(keyContainer);
    }

    this.textarea = document.querySelector('.textarea');
    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      this.keyPressHandler(e.code);
    });
    document.addEventListener('keyup', (e) => {
      e.preventDefault();
      this.keyUnPressHandler(e.code);
    });
    this.textarea.focus();

    const clearButton = document.querySelector('.button_clear');
    clearButton.textContent = 'Clear';
    clearButton.addEventListener('click', () => {
      this.textarea.focus();
      this.textarea.value = '';
    });

    const layoutButton = document.querySelector('.button_layout');
    layoutButton.textContent = this.state.lang.toUpperCase();
    layoutButton.addEventListener('click', () => {
      this.textarea.focus();
      this.switchLayout();
    });
  }

  getKeyParams(key) {
    const params = {};
    const specialsLabels = {
      Backspace: '\u27f5',
      Tab: '\u21b9',
      CapsLock: 'Caps Lock',
      Enter: '\u21B5',
      ShiftLeft: '\u21E7',
      ShiftRight: '\u21E7',
      ControlLeft: 'Ctrl',
      MetaLeft: 'Win',
      AltLeft: 'Alt',
      AltRight: 'Alt',
      Space: ' ',
      ControlRight: 'Ctrl',
      ArrowUp: '\u2191',
      ArrowDown: '\u2193',
      ArrowLeft: '\u2190',
      ArrowRight: '\u2192',
      Delete: 'Del',
    };
    if (this.keys[key].eng && this.keys[key].rus) {
      params.keyMain = this.keys[key].eng.key.toUpperCase();
      params.keySecond = params.keyMain === this.keys[key].eng.shiftKey ? '' : this.keys[key].eng.shiftKey;
      params.keyMainRus = keys[key].rus.key.toUpperCase();
      params.keySecondRus = params.keyMainRus === this.keys[key].rus.shiftKey ? '' : this.keys[key].rus.shiftKey;
    } else {
      params.keyMain = specialsLabels[key];
      params.keySecond = '';
      params.keyMainRus = specialsLabels[key];
      params.keySecondRus = '';
    }
    params.classes = ['key'];
    if (key === 'Backspace') params.classes.push('key_backspace');
    if (key === 'Tab') params.classes.push('key_tab');
    if (key === 'CapsLock') params.classes.push('key_caps');
    if (key === 'Enter') params.classes.push('key_enter');
    if (key === 'ShiftLeft') params.classes.push('key_shift-left');
    if (key === 'ShiftRight') params.classes.push('key_shift-right');
    if (key === 'ControlRight' || key === 'ControlLeft') params.classes.push('key_ctrl');
    if (key === 'Space') params.classes.push('key_space');

    return params;
  }

  keyPressHandler(key) {
    this.pressed.add(key);
    if (this.pressed.size === 2 && (this.pressed.has('ControlLeft') && this.pressed.has('AltLeft'))) this.switchLayout();
    const currentKey = document.querySelector(`[data-name="${key}"]`);
    if (!currentKey) return;
    currentKey.classList.add('key_pressed');

    this.textarea.focus();

    const startPos = this.textarea.selectionStart;
    const endPos = this.textarea.selectionEnd;
    this.cursorPosition = endPos;
    this.textarea.setSelectionRange(this.cursorPosition, this.cursorPosition);
    if (key === 'CapsLock') {
      this.state.isCapsOn = !this.state.isCapsOn;
      currentKey.classList.toggle('caps_on');
      return;
    } if (key === 'ShiftRight' || key === 'ShiftLeft') {
      this.state.isShiftPressed = true;
    } if (key === 'Backspace') {
      this.textarea.value = this.textarea.value
        .substring(0, startPos - ((endPos === this.textarea.value.length || startPos === endPos)
          ? 1 : 0)) + this.textarea.value.substring(endPos, this.textarea.value.length);
      this.cursorPosition = startPos - (startPos === endPos ? 1 : 0);
      this.textarea.setSelectionRange(this.cursorPosition, this.cursorPosition);
      return;
    } if (key === 'ArrowLeft') {
      this.cursorPosition -= this.cursorPosition > 0 ? 1 : 0;
      this.textarea.setSelectionRange(this.cursorPosition, this.cursorPosition);
      return;
    } if (key === 'ArrowRight') {
      this.cursorPosition += this.cursorPosition < this.textarea.value.length ? 1 : 0;
      this.textarea.setSelectionRange(this.cursorPosition, this.cursorPosition);
      return;
    } if (key === 'ArrowUp') {
      this.cursorPosition = this.cursorPosition - 42 > 0 ? this.cursorPosition - 42 : 0;
      this.textarea.setSelectionRange(this.cursorPosition, this.cursorPosition);
      return;
    } if (key === 'ArrowDown') {
      this.cursorPosition = this.cursorPosition + 42 < this.textarea.value.length
        ? this.cursorPosition + 42
        : this.textarea.value.length;
      this.textarea.setSelectionRange(this.cursorPosition, this.cursorPosition);
      return;
    } if (key === 'Delete') {
      this.textarea.value = this.textarea.value.substring(0, startPos)
        + this.textarea.value.substring(
          endPos + (startPos === endPos ? 1 : 0),
          this.textarea.value.length,
        );
      this.textarea.setSelectionRange(startPos, startPos);
      return;
    }

    const content = this.getContent(key);
    if (content === '') return;

    if (this.textarea.selectionStart || this.textarea.selectionStart === '0') {
      this.textarea.value = this.textarea.value.substring(0, startPos) + content
                            + this.textarea.value.substring(endPos, this.textarea.value.length);
      this.cursorPosition = startPos + content.length;
      this.textarea.setSelectionRange(this.cursorPosition, this.cursorPosition);
    } else this.textarea.value += content;
  }

  keyUnPressHandler(key) {
    this.pressed.delete(key);
    const currentKey = document.querySelector(`[data-name="${key}"]`);
    if (!currentKey) return;
    currentKey.classList.remove('key_pressed');
    if (key === 'ShiftRight' || key === 'ShiftLeft') {
      this.state.isShiftPressed = false;
    }
    this.textarea.focus();
  }

  switchLayout() {
    this.state.lang = this.state.lang === 'eng' ? 'rus' : 'eng';
    const keysArr = [...document.querySelectorAll('.key')];
    keysArr.forEach((key) => [...key.querySelectorAll('span')].forEach((span) => span.classList.toggle('key_invisible')));
    localStorage.setItem('lang', this.state.lang);
    document.querySelector('.button_layout').textContent = this.state.lang.toUpperCase();
  }

  getContent(key) {
    if (key === 'Space') return ' ';
    if (key === 'Tab') return '    ';
    if (key === 'Enter') return '\n';
    if (!this.keys[key][this.state.lang]) return '';
    if (this.state.isCapsOn && this.state.isShiftPressed) {
      return this.keys[key][this.state.lang].shiftKey.toLowerCase();
    }
    if (this.state.isCapsOn) return this.keys[key][this.state.lang].capsKey;
    if (this.state.isShiftPressed) return this.keys[key][this.state.lang].shiftKey;
    return this.keys[key][this.state.lang].key;
  }
}

const keyboard = new Keyboard(keys);
keyboard.init();
