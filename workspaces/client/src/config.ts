const auth0 = {
  domain: import.meta.env.VITE_AUTH0_DOMAIN ?? "",
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID ?? "",
  redirectUri: import.meta.env.VITE_AUTH0_CALLBACK_URI ?? "",
};
const toggles = (import.meta.env.VITE_TOGGLES || "").split(/\s+/);

export { auth0, toggles };