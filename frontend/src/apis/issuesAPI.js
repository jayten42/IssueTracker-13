import axios from 'axios';

import { getAuthConfig } from './authAPI';

export const getIssues = async (query) => {
  const { data } = await axios.get(`/api/issues?${query}`, getAuthConfig());
  return data.map(({ id, isOpen, preview, title, createdAt, Assignee, Labels, Milestone, author }) => {
    return {
      id,
      isOpen,
      preview,
      title,
      createdAt,
      assignee: Assignee,
      author: author.userName,
      labels: Labels,
      milestone: Milestone && Milestone.title,
    };
  });
};

export const getIssueDetail = async (id) => {
  const { data } = await axios.get(`/api/issues/${id}`, getAuthConfig());
  return data;
};

export const addIssue = async (issue) => {
  try {
    const { data } = await axios.post('/api/issues', issue, getAuthConfig());
    return data;
  } catch (error) {
    return 'fail';
  }
};

export const updateIssue = async (issue) => {
  const { message } = await axios.put(`/api/issues/${issue.id}`, issue, getAuthConfig());
  return message;
};
