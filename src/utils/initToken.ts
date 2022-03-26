// import axios from 'axios';
// import fs from 'fs';

// export type AuthResponse = {
//   access_token: string;
//   expires_in: string;
//   token_type: string;
// };

// axios.defaults.headers.common['Client-ID'] = process.env.CLIENT_ID!;

// const tokenExist = fs.existsSync('token.json');

// (async () => {
//   if (!tokenExist) {
//     const result = await axios.post(
//       `https://id.twitch.tv/oauth2/token?client_id=${process.env
//         .CLIENT_ID!}&client_secret=${process.env
//         .CLIENT_SECRET!}&grant_type=client_credentials`
//     );

//     fs.writeFileSync('token.json', JSON.stringify(result.data as AuthResponse));
//   }
// })();
