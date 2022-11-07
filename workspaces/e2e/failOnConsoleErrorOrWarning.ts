import { E2eHelper } from "./types/e2eHelper";

export const failOnConsoleErrorOrWarning: E2eHelper = ({ page }) => {
  page.on("console", (message) => {
    const messageType = message.type();
    if (messageType === "error" || messageType === "warning") {
      throw new Error(message.text());
    }
  });
};
