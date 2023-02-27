import { useQuery } from '@tanstack/react-query';
import { GitHubApi } from '../../api/GitHubApi';
import { Issue } from "../interfaces";


export const useIssuesList = () => {
   const getIssues = async (): Promise<Issue[]> => {
      const { data } = await GitHubApi.get<Issue[]>('/issues');
      console.log(data)
      return data;
   }
   const issuesQuery = useQuery(
      ['issues'],
      getIssues
   )
   return { issuesQuery };
}
