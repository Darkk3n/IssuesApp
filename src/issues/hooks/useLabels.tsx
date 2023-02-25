import { useQuery } from "@tanstack/react-query";
import { GitHubApi } from "../../api/GitHubApi";
import { sleep } from '../../helpers/sleep';
import { Label } from "../interfaces/Label";

export const useLabels = () => {
   const getLabels = async (): Promise<Label[]> => {
      await sleep(2);
      const { data } = await GitHubApi.get<Label[]>('/labels');
      return data;
   }

   const labelsQuery = useQuery(
      ['labels'],
      getLabels,
      {
         refetchOnWindowFocus: false,
         staleTime: 1000 * 60 * 60
      })
   return labelsQuery;
}