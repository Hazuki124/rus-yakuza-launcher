import fs from 'fs';
import unzipper from 'unzipper';

export default class FileExtractor {
  static extract(filePath: string, extractPath = '.') {
    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(unzipper.Extract({ path: extractPath }))
        .on('finish', (data: unknown) => {
          resolve(data);
        })
        .on('error', (e: any) => {
          reject(e);
        });
    });
  }
}
