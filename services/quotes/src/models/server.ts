import express, {Application, json, urlencoded} from 'express';
import root from '../routes';

class Server {
  private static instance: Server;
  public app: Application;

  private constructor() {
    this.app = express();
    this.app.use(json());
    this.app.use(root);
    this.app.use(urlencoded({extended: true}));
  }

  public  static getInstance(): Server {
    if (!Server.instance) {
      Server.instance = new Server();
    }

    return Server.instance;
  }

  public async start(port: number | string): Promise<void> {
    try {
      this.app.listen(port, () => {
        console.log(`Running in port ${port}`);
      });
    } catch (error) {
      console.log(`Error in setup App`)
    }
  }
}

export default Server.getInstance();