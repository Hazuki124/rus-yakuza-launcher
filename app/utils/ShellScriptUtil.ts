import { spawn } from 'child_process';

export default class ShellScriptUtil {
  static runBat(input: { shell: string; cwd: string }) {
    return new Promise((resolve, reject) => {
      const ls = spawn(input.shell, { cwd: input.cwd });

      ls.stdout.on('data', data => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', data => {
        console.log(`stdout: ${data}`);
      });

      ls.on('exit', code => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) {
          resolve();
        } else {
          reject();
        }
      });
    });
  }
}
