const TOKEN_KEY = "token";

// Function to save the token to localStorage
export const saveTokenToStorage = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

// Function to get the token from localStorage
export const getTokenFromStorage = () => {
  return localStorage.getItem(TOKEN_KEY);
};

// Function to remove the token from localStorage
export const removeTokenFromStorage = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const checkForToken = (navigate) => {
  const token = getTokenFromStorage();

  if (!token) {
    navigate("/");
  }
};
