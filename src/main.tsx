import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root') as HTMLElement;   //ensuring that container will be treated as HTML element
const root = createRoot(container);
root.render(<App />);

declare global {
  interface Window {
    DDSM_AGENT?: {
      channels: any;                                            //stores some kind of channel-related data.
      send: (channel: string, data?: any) => Promise<any>;      //ends data to a specific channel and returns a promise.
      listen: (channel: string, func: (event: any, ...args: any[]) => void) => void;    //Allows listening to messages from a specific channel.
      removeListener: (channel: string) => void;                //Removes a listener from a specific channel.
      closeWindow: () => void;                                  //closes the current application window.
    };
  }
}
