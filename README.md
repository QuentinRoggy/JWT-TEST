# JWT-TEST

This project is just a first test to use Json Web Token into my own projects. I used followings to create a backend authenticator system :

- jsonwebtoken
- bcryptjs
- body-parser
- cors

## Try it

First, clone this repository in your own folder.

Then, install dependencies
```bash
npm install
```

Now, create a .env files based on .env.example. You can find inside randoms keys. You can change it with any sentence you want to use.

Next, move into app/config/db.config.js and edit the file with your own database informations.

Finally you can run server with
```bash
npm run dev
```

Use Postman or Insomnia to add some users with differents kind of rules, then you can signup with these accounts and try differentes routes.