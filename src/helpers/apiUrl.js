const API_VERSION = '/api/1.0.0';
export const ROOT_URL = 'http://192.168.0.109:8070';
export const API_URL = `${ROOT_URL}${API_VERSION}`;
export const API_URL_PUBLIC = `${ROOT_URL}${API_VERSION}/public`;
export const API_URL_SECURE = `${ROOT_URL}${API_VERSION}/secured`;

// User
export const USER_LOGIN_API_URL = `${API_URL}/login`;
export const USER_PROFILE_API_URL = `${API_URL_SECURE}/users/profile`;
export const USER_UPDATE_API_URL = `${API_URL}/users/update`;
export const USER_FORGOT_PASSWORD_API_URL = `${API_URL}/users/request/reset-password-by-email`;
export const USER_PASSWORD_RESET_API_URL = `${API_URL}/users/password/reset`;
export const USER_PASSWORD_UPDATE_API_URL = `${API_URL}/users/password/update`;
export const USER_OTP_VERIFY_API_URL = `${API_URL}/users/verify/email-verification/by-link`;

// student
export const STUDENT_REGISTER_API_URL = `${API_URL}/student/sign-up/by/email`;

// Bundles

export const GET_ALL_BUNDLE_API_URL = `${API_URL_PUBLIC}/bundles`;
export const GET_ALL_BUNDLE_HOMEPAGE_API_URL = `${API_URL_PUBLIC}/bundles/for-homepage`;
export const GET_BUNDLE_API_URL = `${API_URL_PUBLIC}/bundles/id`;