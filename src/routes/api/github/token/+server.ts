import { json } from '@sveltejs/kit';
import { writeFile } from 'fs/promises';

/**
 * This endpoint exchanges the GitHub authorization code for an access token
 * and fetches the user profile information
 */
let githubClientId = "Iv23li1s9ocJ5HN7wBQA";
let githubSecret = "90aae5889528b474535464c06f039d072ce3d66c";

export async function POST({ request }) {
  try {
    const { code } = await request.json();

    if (!code) {
      return json({ error: 'Authorization code is required' }, { status: 400 });
    }

    // Exchange the code for an access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID || githubClientId,
        client_secret: process.env.GITHUB_CLIENT_SECRET || githubSecret,
        code,
        redirect_uri: process.env.GITHUB_REDIRECT_URI
      })
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      console.error('GitHub token error:', tokenData.error);
      return json({ error: tokenData.error_description || 'Failed to get access token' }, { status: 400 });
    }

    const accessToken = tokenData.access_token;

    // Fetch the user profile with the access token
    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        'Authorization': `token ${accessToken}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    const userData = await userResponse.json();

    // Fetch the user's emails if 'user:email' scope was requested
    const emailsResponse = await fetch('https://api.github.com/user/emails', {
      headers: {
        'Authorization': `token ${accessToken}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    const emailsData = await emailsResponse.json();
    
    // Find the primary email
    const primaryEmail = emailsData.find(email => email.primary)?.email || emailsData[0]?.email;

    // Write file by userData.id
    await writeFile(`/tmp/${userData.id}.json`, JSON.stringify(userData));

    // Rest of the code...
    return json({
      user: {
        id: userData.id,
        login: userData.login,
        name: userData.name,
        email: primaryEmail,
        avatar_url: userData.avatar_url
      }
    });
  } catch (error) {
    console.error('Server error during GitHub authentication:', error);
    return json({ error: 'Authentication failed' }, { status: 500 });
  }
}