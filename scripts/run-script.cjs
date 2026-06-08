const { spawnSync } = require('node:child_process');
const path = require('node:path');

const script = process.argv[2];
if (!script) {
  throw new Error('Usage: node scripts/run-script.cjs <script-name>');
}

const scriptPath = path.join(__dirname, `${script}.ts`);
const result = spawnSync(process.execPath, ['-r', 'ts-node/register', scriptPath], {
  stdio: 'inherit',
  env: process.env
});

if (result.error) throw result.error;
process.exit(result.status ?? 1);
