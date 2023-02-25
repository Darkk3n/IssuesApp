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
         staleTime: 1000 * 60 * 60,
         placeholderData: [
            {
               id: 1757816973,
               node_id: "MDU6TGFiZWwxNzU3ODE2OTcz",
               url: "https://api.github.com/repos/facebook/react/labels/dependencies",
               name: "dependencies",
               color: "0366d6",
               default: false
            },
            {
               id: 2281766624,
               node_id: "MDU6TGFiZWwyMjgxNzY2NjI0",
               url: "https://api.github.com/repos/facebook/react/labels/Component:%20Scheduling%20Profiler",
               name: "Component: Scheduling Profiler",
               color: "1dc3d6",
               default: false
            }
         ],
         initialData: []
      })
   return labelsQuery;
}