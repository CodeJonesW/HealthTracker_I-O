export const fetchUser = () =>
  fetch("http://localhost:3000/current_user", {
    headers: { Authorization: `Bearer ${localStorage.getItem("jwt_token")}` }
  }).then(res => res.json())
