import axios from 'axios';
import Cookies from 'js-cookie';

export const instance = axios.create({
<<<<<<< HEAD
  // baseURL: 'http://127.0.0.1:8000/api/v1/',
=======
>>>>>>> 21eafc95ec9fe1a465c999a389ffc38a120ec107
  baseURL: 'http://127.0.0.1:8000/api/v1/',
  headers: {
    'X-CSRFToken': Cookies.get('csrftoken'),
    Jwt: localStorage.getItem('token'),
  },
  withCredentials: true,
});

export async function userNameLogin({ username, password }) {
  const response = await fetch('http://127.0.0.1:8000/api/v1/users/jwttoken', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
    credentials: 'include',
  });

  if (response.ok) {
    const data = await response.json();
    const token = data.token;
    window.localStorage.setItem('token', token);
    return true;
  } else {
    const { message } = await response.json();
    throw new Error(message);
  }
}

export const signUpUser = data => {
  return instance.post('users/', data).then(res => res.data);
};

export const getMyProfile = () => {
  return instance.get('users/myprofile').then(res => res.data);
};
export const putMyProfile = () => {
  return instance.put('users/myprofile').then(res => res.data);
};
export const changeProfileUser = data => {
  return instance.put('users/myprofile', data).then(res => res.data);
};
export const getLectureInfo = () => {
  return instance.get('lectures/').then(res => res.data);
};
