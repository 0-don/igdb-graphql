import fs from 'fs';

export function getTime(date: Date = new Date()) {
  return date.toTimeString().slice(0, 8);
}

export const token = fs.readFileSync('token.json', 'utf-8');
