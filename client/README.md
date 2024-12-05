# Secret-and-Secure-Chat-App

## Client Side

> This is the client side of the Secret-and-Secure-Chat-App. It is built with Next.js and Tailwind CSS. Primarily focused on Nextjs 15 and Typescript.

### Tech Involved

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Socket.io-client](https://socket.io/)

> Linting is the only problematic thing that I am not grasping yet.
> Will learn about it in the future.

### File Structure

```bash
.
├── app
│   ├── (auth)
│   │   |── sign-in
│   │   |       └── page.tsx
│   │   |── sign-up
│   │   |       └── page.tsx
│   │   └── layout.tsx
│   ├── (pages)
│   │   |── chatroom
│   │   |    └── [group]
│   │   |           └── page.tsx
│   │   |── private-line
│   │   |    └── [username]
│   │   |           └── page.tsx
│   │   └── users
│   |       └── [id]
│   |             └── page.tsx
│   |
│   |- layout.tsx
|   |- page.tsx
|   └── globals.css
|
├── components
├── lib
│   ├── socket.ts
│   └── utils.ts
├── public
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

### Project Setup

1. Setting up `socket.io-client`

   ```ts
   import { io, Socket } from "socket.io-client";

   let socket: Socket | null = null;

   export const initSocket = (): Socket => {
     if (!socket) {
       socket = io(socket_url, {
         transports: ["websocket", "polling"], // Prefer WebSocket over polling
         reconnection: true, // Auto-reconnect on failure
         timeout: 10000, // Connection timeout
       });
     }

     return socket;
   };
   ```

### Issues

- [x] Linting is the only problematic thing that I am not grasping yet.
- [x] Socket Provider setup
- [ ] [Collapsible](https://youtu.be/fIR3isyFV8s?si=HDLZ1bV7Stx-4H0C)
