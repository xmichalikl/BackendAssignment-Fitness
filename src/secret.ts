import crypto from 'crypto';

function secret() {
  console.log(`ACCESS_TOKEN_SECRET=${crypto.randomBytes(64).toString('hex')}`);
  console.log(`REFRESH_TOKEN_SECRET=${crypto.randomBytes(64).toString('hex')}`);
}

secret();
