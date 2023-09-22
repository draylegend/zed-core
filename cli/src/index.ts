import { FileWatcher } from './file-watcher.ts';
import { Server } from './server.ts';

const server = new Server();
const fileWatcher = new FileWatcher();

server.serve();
fileWatcher.watch(fileName => {
  console.log(fileName);
});
