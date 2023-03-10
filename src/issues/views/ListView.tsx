import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssuesList } from '../hooks/';


export const ListView = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const { issuesQuery } = useIssuesList();

  const onLabelChanged = (labelName: string) => {
    selectedLabels.includes(labelName)
      ? setSelectedLabels(selectedLabels.filter(r => r !== labelName))
      : setSelectedLabels([...selectedLabels, labelName]);
  }
  return (
    <div className="row mt-5">

      <div className="col-8">
        <IssueList />
      </div>

      <div className="col-4">
        <LabelPicker
          selectedLabels={selectedLabels}
          onChange={(labelName) => onLabelChanged(labelName)}
        />
      </div>
    </div>
  )
}
