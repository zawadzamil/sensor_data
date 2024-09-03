'use client';

import { usePathname, useRouter } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';
import api from '@/components/services/Api';
import { ACCESS_TOKEN, FORGET_PASSWORD_URL, GET_USER_PROFILE, LOGIN_URL, RESET_PASSWORD_AUTH_CODE, SELLER_PROFILE_UPDATE, SEND_OTP, VERIFY_OTP } from '../_helpers/Constant';
export const AuthContext = createContext('AuthContext');

const AuthContextProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [profile, setProfile] = useState(null);
    const [role, setRole] = useState();
    const [loading, setLoading] = useState(false);
    const [profileLoading, setProfileLoading] = useState(true);
    const [selectedStore, setSelectedStore] = useState(null);
    const [loginModal, setLoginModal] = useState(false);
    const [showSignupForm, setShowSignupForm] = useState(true);
    const [resetPassword, setResetPassword] = useState(false);
    const [resetImage, _setResetImage] = useState(false);

    const setResetImage = () => {
        _setResetImage(true);
        setTimeout(() => {_setResetImage(false)}, 1000)
    }
   
    const pathName = usePathname();
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            if (['/', '/login'].includes(pathName)) router.push('/dashboard');
            getUserProfile();
        } else {
            setProfileLoading(false);
            if (!['/', '/login', '/signup'].includes(pathName)) router.push('/login');
        }
    }, [isLogin]);

    const login = async (body, callback) => {
        await api.post({ url: LOGIN_URL, setLoading, body }, (response) => {
            localStorage.setItem(ACCESS_TOKEN, response.data.token);
            setRole(response.data.user?.role?.alias);
            setProfile(response.data.user);
            // setIsLogin(true);
            callback(response);
        });
    };
    const forgetPassword = async (body, callback) => {
        await api.updateData({ url: FORGET_PASSWORD_URL, setLoading, body }, () => {
            callback();
        });
    };
    const resetPasswordAuth = async (body, callback) => {
        await api.post({ url: RESET_PASSWORD_AUTH_CODE, setLoading, body }, (response) => {
            setRole(response.data.user?.role?.alias);
            setProfile(response.data.user);
            callback();
        });
    };

    const signup = async (body, callback) => {
        await api.post({ url: SIGNUP_URL, setLoading, body }, (response) => {
            localStorage.setItem(ACCESS_TOKEN, response.data.token);
            callback();
        });
    };

    const otpVerify = async (body, callback) => {
        await api.getSingleData(
            {
                url: `${VERIFY_OTP}?phone=${body.phone}&otp=${body.otp}&type=signup`,
                setLoading,
            },
            (response) => {
                localStorage.setItem(ACCESS_TOKEN, response.data.token);
                callback();
            }
        );
    };

    const profilePersonalInfoUpdate = async (body) => {
        await api.updateData(
            {
                url: UPDATE_USER_URL,
                setLoading: setLoading,
                body: body,
            },
            async () => {
                Toast('success', 'Success', 'Profile information update successfully');
                getUserProfile();
            }
        );
    };
    const profileUpdateOtpVerify = async (body, callback) => {
        await api.getSingleData(
            {
                url: `${VERIFY_OTP}?phone=${body.phone}&otp=${body.otp}&type=update%20info`,
                setLoading,
            },
            () => {
                callback();
            }
        );
    };
    const profileUpdateSendOtp = async (body, callback) => {
        await api.getSingleData(
            {
                url: `${SEND_OTP}?phone=${body}&type=update%20info`,
                setLoading,
            },
            () => {
                callback();
            }
        );
    };
    const profileChangePassword = async (body, callback) => {
        const newValues = {
            currentPassword: body.currentPassword,
            newPassword: body.newPassword,
        };
        await api.updateData(
            {
                url: CHANGE_PASSWORD_URL,
                setLoading: setLoading,
                body: newValues,
            },
            async () => {
                Toast('success', 'Success', 'Password changed successfully.');
                callback();
            }
        );
    };
    const sellerProfileUpdate = async (body, callback) => {
        await api.updateData(
            {
                url: SELLER_PROFILE_UPDATE,
                setLoading,
                body,
            },
            () => {
                Toast('success', 'profile update', 'seller profile update successfully!');
                callback();
                getUserProfile();
            }
        );
    };
    const sendOtp = async (body, callback) => {
        await api.getSingleData(
            {
                url: `${SEND_OTP}?phone=${body}&type=signup`,
                setLoading,
            },
            (response) => {
                localStorage.setItem(ACCESS_TOKEN, response.data.token);
                if (callback) {
                    callback();
                }
            }
        );
    };
    const sendForgetPasswordOtp = async (body, callback) => {
        await api.getSingleData(
            {
                url: `${SEND_OTP}?phone=${body}&type=forgotPassword`,
                setLoading,
            },
            (response) => {
                localStorage.setItem(ACCESS_TOKEN, response.data.token);
                if (callback) {
                    callback();
                }
            }
        );
    };
    const otpVerifyForgetPassword = async (body, callback) => {
        await api.getSingleData(
            {
                url: `${VERIFY_OTP}?phone=${body.phone}&otp=${body.otp}&type=forgotPassword`,
                setLoading,
            },
            () => {
                callback();
            }
        );
    };

    const selectStore = (id) => {
        setSelectedStore(id);
        localStorage.setItem(STORE_ID, id);
    };

    const getUserProfile = async () => {
        const errorHandle = () => {
            logout();
        };
        api.getSingleData(
            {
                url: GET_USER_PROFILE,
                setLoading: setProfileLoading,
                errorHandle: () => errorHandle(),
            },
            (response) => {
                setProfile(response.data);
                setIsLogin(true);
            }
        );
    };

    const logout = () => {
        setIsLogin(false);
        setSelectedStore(null);
        setProfile(null);
        setLoginModal(false);
        localStorage.clear();
        router.push('/login');
    };

    return (
        <AuthContext.Provider
            value={{
                isLogin,
                profile,
                loading,
                profileLoading,
                role,
                permissions: profile ? profile.permissions : [],
                login,
                logout,
                getUserProfile,
                selectedStore,
                selectStore,
                signup,
                forgetPassword,
                resetPassword,
                setResetPassword,
                resetPasswordAuth,
                setLoginModal,
                loginModal,
                setShowSignupForm,
                showSignupForm,
                otpVerify,
                sendOtp,
                profileUpdateOtpVerify,
                profileUpdateSendOtp,
                sellerProfileUpdate,
                profilePersonalInfoUpdate,
                profileChangePassword,
                sendForgetPasswordOtp,
                otpVerifyForgetPassword,
                resetImage,
                setResetImage
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
