import * as React from "react";

import { Job } from "src/kernel";
import MainList from "../commons/MainList";

interface IJobMainListProps {
  lst: { [id: number]: Job };
  selected?: number[];
  selectedOnChange?: (ids: number[]) => void;
  onEdit?: (id: number) => void;
}

const getName = (p: Job) => `${p.firstName}, ${p.lastName}`;

const JobMainList: React.FC<IJobMainListProps> = (props) => {
  const {
    lst,
    selected,
    selectedOnChange,
    onEdit,
  } = props;
  const cols = [
    {
      title: "Name",
      extractor: (p: Job) => getName(p),
    },
  ];

  return (
    <MainList
      lst={Object.values(lst)}
      cols={cols}
      selected={selected}
      selectedOnChange={selectedOnChange}
      onEdit={onEdit}
    />
  );
};

export default JobMainList;