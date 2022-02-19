export const API_URL = "http://localhost:3500";

export function USER_GET() {
  return {
    url: API_URL + "/users",
    options: {
      method: "GET",
    },
  };
}

export function USER_GET_ID(id) {
  return {
    url: `${API_URL}/users/${id}`,
    options: {
      method: "GET",
    },
  };
}

export function USER_POST(body) {
  return {
    url: API_URL + "/users",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_PUT(id, body) {
  return {
    url: `${API_URL}/users/${id}`,
    options: {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_DELETE(id) {
  return {
    url: `${API_URL}/users/${id}`,
    options: {
      method: "DELETE",
    },
  };
}
