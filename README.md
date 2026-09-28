# JavaScript Problem Solving Roadmap

<p align="left">
  <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Progress-10%2F10_Completed-brightgreen?style=flat-square&logo=checkmarx" alt="Progress" />
</p>

A structured progression of 10 essential JavaScript coding challenges covering fundamental syntax, data structure manipulation, higher-order functions, and asynchronous concurrency patterns.

---

## <img src="https://img.shields.io/badge/-Directory_Tree-24292e?style=flat-square&logo=gitkraken&logoColor=white" />

```text
JavaScript_Roadmap/
│
├── [DIR] Core_Syntax/             # Easy Level: Warm-ups & Core Syntax
│   ├── task1.js
│   ├── task2.js
│   └── task3.js
│
├── [DIR] DS_Logic/                # Intermediate Level: Data Structures & Logic
│   ├── task4.js
│   ├── task5.js
│   ├── task6.js
│   └── task7.js
│
├── [DIR] CAA/                     # Advanced Level: Closures, Async, & Algorithms
│   ├── task8.js
│   ├── task9.js
│   └── task10.js
│
└── [DIR] Outputs/                 # Terminal execution screenshots
    ├── task1.png ... task10.png
```

---

## <img src="https://img.shields.io/badge/-Roadmap_Breakdown-blue?style=flat-square&logo=buffer&logoColor=white" />

### <img src="https://img.shields.io/badge/-Level_01-2ea44f?style=flat-square&logo=codeigniter&logoColor=white" /> Warm-ups & Core Syntax

| Task | Challenge | Description | Key Concepts | Source Code | Output |
| :---: | :--- | :--- | :--- | :---: | :---: |
| `01` | **Reverse a String** | Reverses an input string character by character. | `split`, `reverse`, `join`, iteration | <a href="Core_Syntax/task1.js"><img src="https://img.shields.io/badge/-View_Code-blue?style=flat-square&logo=visualstudiocode" /></a> | <a href="Outputs/task1.png"><img src="https://img.shields.io/badge/-View_Output-2ea44f?style=flat-square&logo=target" /></a> |
| `02` | **FizzBuzz Scenario** | Generates numbers with multiples substituted. | Modulo operator (`%`), branching | <a href="Core_Syntax/task2.js"><img src="https://img.shields.io/badge/-View_Code-blue?style=flat-square&logo=visualstudiocode" /></a> | <a href="Outputs/task2.png"><img src="https://img.shields.io/badge/-View_Output-2ea44f?style=flat-square&logo=target" /></a> |
| `03` | **Find Largest Number** | Extracts the maximum numerical value from an array. | `Math.max()`, spread syntax (`...`) | <a href="Core_Syntax/task3.js"><img src="https://img.shields.io/badge/-View_Code-blue?style=flat-square&logo=visualstudiocode" /></a> | <a href="Outputs/task3.png"><img src="https://img.shields.io/badge/-View_Output-2ea44f?style=flat-square&logo=target" /></a> |

---

### <img src="https://img.shields.io/badge/-Level_02-dfb317?style=flat-square&logo=stackshare&logoColor=white" /> Data Structures & Logic

| Task | Challenge | Description | Key Concepts | Source Code | Output |
| :---: | :--- | :--- | :--- | :---: | :---: |
| `04` | **Count Vowels** | Counts occurrence of case-insensitive vowels. | Regular Expressions (`/[aeiou]/gi`) | <a href="DS_Logic/task4.js"><img src="https://img.shields.io/badge/-View_Code-blue?style=flat-square&logo=visualstudiocode" /></a> | <a href="Outputs/task4.png"><img src="https://img.shields.io/badge/-View_Output-dfb317?style=flat-square&logo=target" /></a> |
| `05` | **Remove Duplicates** | Filters array to return unique elements only. | `Set`, `filter()`, `indexOf()` | <a href="DS_Logic/task5.js"><img src="https://img.shields.io/badge/-View_Code-blue?style=flat-square&logo=visualstudiocode" /></a> | <a href="Outputs/task5.png"><img src="https://img.shields.io/badge/-View_Output-dfb317?style=flat-square&logo=target" /></a> |
| `06` | **Check Palindrome** | Validates symmetric text ignoring punctuation/case. | String sanitization, two-pointer | <a href="DS_Logic/task6.js"><img src="https://img.shields.io/badge/-View_Code-blue?style=flat-square&logo=visualstudiocode" /></a> | <a href="Outputs/task6.png"><img src="https://img.shields.io/badge/-View_Output-dfb317?style=flat-square&logo=target" /></a> |
| `07` | **Title Case Sentence** | Capitalizes the initial letter of each word. | `slice()`, `substring()`, `map()` | <a href="DS_Logic/task7.js"><img src="https://img.shields.io/badge/-View_Code-blue?style=flat-square&logo=visualstudiocode" /></a> | <a href="Outputs/task7.png"><img src="https://img.shields.io/badge/-View_Output-dfb317?style=flat-square&logo=target" /></a> |

---

### <img src="https://img.shields.io/badge/-Level_03-cb3837?style=flat-square&logo=graphql&logoColor=white" /> Closures, Async, & Algorithms (CAA)

| Task | Challenge | Description | Key Concepts | Source Code | Output |
| :---: | :--- | :--- | :--- | :---: | :---: |
| `08` | **Two Sum Algorithm** | Returns indices of 2 values summing to target in $O(n)$ time. | Hash Maps (`Map`), time complexity | <a href="CAA/task8.js"><img src="https://img.shields.io/badge/-View_Code-blue?style=flat-square&logo=visualstudiocode" /></a> | <a href="Outputs/task8.png"><img src="https://img.shields.io/badge/-View_Output-cb3837?style=flat-square&logo=target" /></a> |
| `09` | **Memoized Decorator** | Higher-order caching proxy for expensive computations. | Closures, serialization, rest/spread | <a href="CAA/task9.js"><img src="https://img.shields.io/badge/-View_Code-blue?style=flat-square&logo=visualstudiocode" /></a> | <a href="Outputs/task9.png"><img src="https://img.shields.io/badge/-View_Output-cb3837?style=flat-square&logo=target" /></a> |
| `10` | **Fetch Timeout Wrapper** | Aborts network calls that exceed configured millisecond threshold. | `Promise.race()`, `setTimeout`, async | <a href="CAA/task10.js"><img src="https://img.shields.io/badge/-View_Code-blue?style=flat-square&logo=visualstudiocode" /></a> | <a href="Outputs/task10.png"><img src="https://img.shields.io/badge/-View_Output-cb3837?style=flat-square&logo=target" /></a> |

---

## Author

<p align="left">
  <a href="https://github.com/afra0514">
    <img src="https://img.shields.io/badge/Profile-afra0514-181717?style=for-the-badge&logo=github&logoColor=white" alt="afra0514 GitHub" />
  </a>
</p> 
