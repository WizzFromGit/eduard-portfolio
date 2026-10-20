import pdfParse from 'pdf-parse';
import fs from 'fs';
const buffer = fs.readFileSync('./pdf-resume/resume (1).pdf');
const data = await pdfParse(buffer);
fs.writeFileSync('/tmp/final_resume.txt', data.text);
console.log('DONE', data.text.length);
