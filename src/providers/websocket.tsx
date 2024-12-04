//import { WebsocketProvider } from "y-websocket";
import * as Y from "yjs";
import { ConnectProvider } from "./types";
import { HocuspocusProvider } from "@hocuspocus/provider";

export class WebSocketConnectProvider implements ConnectProvider {
  doc: Y.Doc;
  // private provider: WebsocketProvider;
  private provider: HocuspocusProvider;

  constructor(url: string, room: string, doc: Y.Doc) {
    this.doc = doc;
    this.provider = new HocuspocusProvider({
      url,
      document: doc,
      token: 'user_2Wa3n5qz0yy268gHqZwbYmwJWQ3',
      name: `${room}`,
      connect: false
    });
  }

  connect() {
    this.provider.connect();
  }

  disconnect() {
    this.provider.disconnect();
    this.provider.destroy();
  }

  async waitForSynced() {
    return new Promise<void>((resolve) => {
      this.provider.on("synced", () => resolve());
    });
  }
}
