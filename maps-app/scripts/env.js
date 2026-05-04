const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const mapBoxKey = process.env['MB_KEY'];

if (!mapBoxKey) {
  throw new Error('Unable to read MB_KEY');
}


const content = `
export const environment = {
  mapBoxKey: "${mapBoxKey}"
};
`;

mkdirSync('./src/environments', { recursive: true});

writeFileSync('./src/environments/environment.ts', content)
writeFileSync('./src/environments/environment.development.ts', content)
