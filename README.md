# Number System Converter

A simple web app that converts numbers between **decimal**, **binary**, **octal**, and **hexadecimal**, with basic validations and error messages.

---

## ✨ Features

- Convert between: **DEC ⇄ BIN ⇄ OCT ⇄ HEX**
- Quick clear (reset all fields)
- Contextual error messages (invalid inputs)

---

## ✅ Validation Rules

- **Binary:** only `0` and `1`
- **Octal:** digits `0–7`
- **Hexadecimal:** `0–9` and `A–F` (case-insensitive)
- Invalid values trigger an **error message**

---

## 🧪 Manual Test Checklist

- [X] `DEC 0` → `BIN 0` · `OCT 0` · `HEX 0`
- [X] `DEC 255` → `BIN 11111111` · `OCT 377` · `HEX FF`
- [X] `BIN 0001010` → `DEC 10` (leading zeros)
- [X] `HEX ff` (case-insensitive) → `DEC 255`
- [X] Invalid inputs show the **correct error message**

---

## 🛠️ Tech Stack

- **HTML5** · **CSS3** · **JavaScript**
- No frameworks. Code and messages in **English** (UI can be localized).

---

## 📂 Figma

- **PT-BR prorotype** : https://www.figma.com/design/D58jAky0Hf6zNtx0qdDobM/Conversor-de-Sistemas-Num%C3%A9ricos?node-id=0-1&t=QJd1sx56m9rcZJ5r-1



