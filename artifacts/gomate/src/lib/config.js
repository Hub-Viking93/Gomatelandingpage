/**
 * Central config for app-related URLs.
 *
 * APP_URL: where the actual GoMate app lives. All CTAs across the
 * marketing site that say "Open the App", "Try GoMate", "Get Started",
 * etc. should link here. When the app domain is live, this is where
 * users land.
 *
 * To swap (e.g., for staging), change APP_URL once here.
 */

export const APP_URL = "https://app.gomaterelocate.com";
export const APP_SIGNUP_URL = `${APP_URL}/auth/sign-up`;
export const APP_LOGIN_URL = `${APP_URL}/auth/login`;
