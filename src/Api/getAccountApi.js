import * as httpRequest from './request';

export const accountApi = {
  async Login(email, password) {
    const result = await httpRequest.post("/account/login/", {
      email: email,
      password: password,
    });
    return result;
  },

  async Register(userName, password, email) {
    const result = await httpRequest.post("/account/register/", {
      userName: userName,
      email: email,
      password: password,
    });
    return result;
  },

  async getProfileUser(accessToken) {
    const result = await httpRequest.get("/account/profile/", {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return result;
  },

  async getSongFavorite(accessToken, limit = 100) {
    const result = await httpRequest.get(
      "/favorite/get-authorization-token?_limit=20",
      {
        _limit: limit,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return result;
  },
  async removeSongFavoriteUser(accessToken, _id) {
    const result = await httpRequest.post(
      "/favorite/create/",
      { idMusic: _id, Response: { message: '"Delete favorite success' } },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-type": "application/json",
        },
      }
    );
    return result;
  },
  async createSongFavoriteUser(accessToken, _id) {
    const result = await httpRequest.post(
      "/favorite/create/",
      { idMusic: _id, Response: { message: "Create favorite success" } },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-type": "application/json",
        },
      }
    );
    return result;
  },
};