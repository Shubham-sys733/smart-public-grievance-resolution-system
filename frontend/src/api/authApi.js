
import apiClient from './apiClient'

export const loginUser = (credentials) => {
    return apiClient.post('/api/v1/auth/login', credentials)
}

export const registerUser = (userData) => {
    return apiClient.post('/api/v1/users/register', userData)
}

export const verifyRegistrationOtp = (data) => {
    return apiClient.post(
        '/api/v1/auth/verify-registration-otp',
        data
    )
}

export const resendRegistrationOtp = (email) => {
    return apiClient.post(
        '/api/v1/auth/resend-registration-otp',
        null,
        {
            params: {
                email,
            },
        }
    )
}

export const forgotPassword = (data) => {
    return apiClient.post(
        '/api/v1/auth/forgot-password',
        data
    )
}

export const resetPassword = (data) => {
    return apiClient.post(
        '/api/v1/auth/reset-password',
        data
    )
}
