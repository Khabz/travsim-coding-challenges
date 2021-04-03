A Node.js command line application that scans the files and checks if the file abides by a coding style – guide. If there are no space between the assignments and a semi colon, it should flag the file (show which file has that), line number and type of style guide violated.

### The coding they guide
• Space between variable assignment
- “let a = 1;”
- “const b = 1;”
• Invalid style guide
- “let a=1” - no space and no semi colon
- “const b =2;” - no space
## Get Started
- Clone this project by running `https://github.com/Khabz/travsim-coding-challenges.git`.
- Route to backend challenge 2 directory `cd backend` then `cd challenge1`.
- run `npm install` on your terminal.
- Go to files directory and write your code inside testFile.js

#### Example
`
const a= 1;
let b = 2
`
- run `npm run start`

results
`
No space in line 1
No semi colon on line 2
`