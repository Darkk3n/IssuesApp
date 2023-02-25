import { useQuery } from "@tanstack/react-query";
import { GitHubApi } from '../../api/GitHubApi';
import { Label } from "../interfaces/Label";

export const LabelPicker = () => {

  const getLabels = async (): Promise<Label[]> => {
    const { data } = await GitHubApi.get<Label[]>('/labels');
    return data;
  }

  const labelsQuery = useQuery(
    ['labels'],
    getLabels,
    {
      refetchOnWindowFocus: false
    })

  return (
    <>
      <span
        className="badge rounded-pill m-1 label-picker"
        style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
      >
        Primary
      </span>

    </>
  )
}