import axios from "axios";

const baseUrl = "http://localhost:3020";

class AuthService {
  async userLogin(email: string, password: string) {
    const response = await axios
      .post(`${baseUrl}/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        return { data: res.data, error: null };
      })
      .catch((err) => {
        return { error: err.message, data: null };
      });

    if (!response) throw new Error("Somthing went wrong");

    return response;
  }

  async userSignUp(name: string, email: string, password: string) {
    const response = await axios
      .post(`${baseUrl}/auth/register`, {
        name,
        email,
        password,
      })
      .then((res) => {
        return { data: res.data, error: null };
      })
      .catch((err) => {
        return { error: err.message, data: null };
      });

    if (!response) throw new Error("Somthing went wrong");

    return response;
  }
}

export default AuthService;
