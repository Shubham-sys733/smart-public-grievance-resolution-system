
import apiClient from './apiClient'


/* =========================
   GET MY ISSUES
========================= */

export const getMyIssues = async () => {

    const response = await apiClient.get(
        '/api/v1/issues/my',
        {
            params: {
                page: 0,
                size: 50,
                sort: 'createdAt,desc',
            },
        }
    )

    return response.data
}


/* =========================
   GET ASSIGNED ISSUES
========================= */

export const getAssignedIssues = async ({
    page = 0,
    size = 50,
    sort = 'createdAt,desc',
} = {}) => {

    const response = await apiClient.get(
        '/api/v1/issues/assigned',
        {
            params: {
                page,
                size,
                sort,
            },
        }
    )

    return response.data
}


/* =========================
   CREATE ISSUE
========================= */

export const createIssue = async (formData) => {

    const response = await apiClient.post(
        '/api/v1/issues',
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
    )

    return response.data
}


/* =========================
   GET ISSUE BY ID
========================= */

export const getIssueById = async (issueId) => {

    const response = await apiClient.get(
        `/api/v1/issues/${issueId}`
    )

    return response.data
}


/* =========================
   GET ISSUE STATUS HISTORY
========================= */

export const getIssueStatusHistory = async (issueId) => {

    const response = await apiClient.get(
        `/api/v1/issues/${issueId}/status-history`
    )

    return response.data
}


/* =========================
   UPDATE ISSUE STATUS
========================= */

export const updateIssueStatus = async ({
    issueId,
    status,
    evidencePhoto,
}) => {

    const formData = new FormData()

    formData.append('status', status)

    if (evidencePhoto) {
        formData.append('evidencePhoto', evidencePhoto)
    }

    const response = await apiClient.patch(
        `/api/v1/issues/${issueId}/status`,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }
    )

    return response.data
}


/* =========================
   DELETE ISSUE
========================= */

export const deleteIssue = async (issueId) => {

    const response = await apiClient.delete(
        `/api/v1/issues/${issueId}`
    )

    return response.data
}


/* =========================
   GET POSSIBLE DUPLICATES
========================= */

export const getPossibleDuplicates = async ({
    latitude,
    longitude,
    category,
    radius = 1,
}) => {

    const response = await apiClient.get(
        '/api/v1/issues/possible-duplicates',
        {
            params: {
                latitude,
                longitude,
                category,
                radius,
                page: 0,
                size: 10,
            },
        }
    )

    return response.data
}


/* =========================
   GET ALL ISSUES
========================= */

export const getAllIssues = async ({
    page = 0,
    size = 10,
    sort = 'createdAt,desc',
} = {}) => {

    const response = await apiClient.get(
        '/api/v1/issues',
        {
            params: {
                page,
                size,
                sort,
            },
        }
    )

    return response.data
}


/* =========================
   SEARCH ISSUES
========================= */

export const searchIssues = async ({
    keyword,
    page = 0,
    size = 10,
}) => {

    const response = await apiClient.get(
        '/api/v1/issues/search',
        {
            params: {
                keyword,
                page,
                size,
                sort: 'createdAt,desc',
            },
        }
    )

    return response.data
}


/* =========================
   GET ISSUES BY STATUS
========================= */

export const getIssuesByStatus = async ({
    status,
    page = 0,
    size = 10,
    sort = 'createdAt,desc',
}) => {

    const response = await apiClient.get(
        `/api/v1/issues/status/${status}`,
        {
            params: {
                page,
                size,
                sort,
            },
        }
    )

    return response.data
}


/* =========================
   GET ISSUES BY CATEGORY
========================= */

export const getIssuesByCategory = async ({
    category,
    page = 0,
    size = 10,
    sort = 'createdAt,desc',
}) => {

    const response = await apiClient.get(
        `/api/v1/issues/category/${category}`,
        {
            params: {
                page,
                size,
                sort,
            },
        }
    )

    return response.data
}


/* =========================
   GET ISSUES BY PRIORITY
========================= */

export const getIssuesByPriority = async ({
    priority,
    page = 0,
    size = 10,
    sort = 'createdAt,desc',
}) => {

    const response = await apiClient.get(
        `/api/v1/issues/priority/${priority}`,
        {
            params: {
                page,
                size,
                sort,
            },
        }
    )

    return response.data
}


/* =========================
   ASSIGN ISSUE
========================= */

export const assignIssue = async ({
    issueId,
    fieldWorkerId,
}) => {

    const response = await apiClient.patch(
        `/api/v1/issues/${issueId}/assign`,
        {
            fieldWorkerId,
        }
    )

    return response.data
}
