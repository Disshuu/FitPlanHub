const API = "http://localhost:5000/api";

function signup() {
  fetch(`${API}/auth/signup`, { method: "POST" }).then(res => res.text()).then(console.log);
}

function login() {
  fetch(`${API}/auth/login`, { method: "POST" }).then(res => res.text()).then(console.log);
}

function getPlans() {
  fetch(`${API}/plans`).then(res => res.text()).then(console.log);
}

