import { watch } from 'fs/promises';

export class FileWatcher {
  constructor(private src = './src') {}

  async watch(notify?: (fileName: string) => void) {
    for await (const { filename, eventType } of watch(this.src, {
      recursive: true,
    })) {
      if (filename.endsWith('~') || 'change' !== eventType) {
        continue;
      }

      notify?.(filename);
    }
  }
}
