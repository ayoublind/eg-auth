# Backend API For the EasyGen
A NestJs api to implement users auth ...
## Description
To Make it easy to test i used my cloud public mongodb as you can see in the UsersModule.ts under users.

Also implemented the AuthGuard on users requesting (controller) data in to be able to retrive them once we have the Token...

And a test to use to get the authentificated Profile using :

```bash
curl http://localhost:3020/auth/profile -H "Authorization: Bearer Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTJiYzY2MzVlYzM4MDA0MDU2MjIxMzciLCJlbWFpbCI6ImF5b2JsaW5kQGdtYWlsLmNvbSIsImlhdCI6MTY5NzM2ODg3MCwiZXhwIjoxNjk3MzcyNDcwfQ.VbUYxn2FlB1vg9X35VsrhT8Tq5iogiUUf6X5jlvL9IM"

```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```