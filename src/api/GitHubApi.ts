import axios from "axios";

export const GitHubApi = axios.create({
   baseURL: 'https://api.github.com/repos/facebook/react',
   headers: { Authorization: 'Bearer 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' }
})