import * as React from "react";

import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

import { Subsector, Employee } from "src/kernel";
import MainList, { Col } from "./MainList";

interface IEmployeeMainListProps {
  lst: { [id: number]: Employee };
  selected?: number[];
  selectedOnChange?: (ids: number[]) => void;
  onEdit?: (id: number) => void;
}

const getName = (p: Employee) => `${p.firstName}, ${p.lastName}`;

const EmployeeMainList: React.FC<IEmployeeMainListProps> = (props) => {
  const { lst, selected, selectedOnChange, onEdit } = props;
  const cols: Col[] = [
    {
      title: "Name",
      extractor: (p: Employee) => getName(p),
      comparator: (p1: Employee, p2: Employee) =>
        p1.name < p2.name ? 1 : p1.name === p2.name ? 0 : -1,
    },
    {
      title: "Department",
      extractor: (p: Employee) => p.department,
      comparator: (p1: Employee, p2: Employee) =>
        p1.department < p2.department ? 1 : p1.department === p2.department ? 0 : -1,
    },
    {
      title: "Home Location",
      extractor: (p: Employee) => p.subsector,
      comparator: (p1: Employee, p2: Employee) => p1.subsector < p2.subsector ? 1 : p1.subsector === p2.subsector ? 0 : -1,
    },
    {
      title: "Report to",
      extractor: (p: Employee) =>
        p.reportTo !== -1 && lst[p.reportTo] ? getName(lst[p.reportTo]) : "",
      comparator: (p1: Employee, p2: Employee) => {
        if (p1.reportTo === -1 || p2.reportTo === -1) {
          if (p1.reportTo === -1 && p2.reportTo === -1) {
            return 0;
          } else if (p1.reportTo === -1) {
            return 1;
          } else {
            return -1;
          }
        }
        let pp1 = lst[p1.reportTo].name,
          pp2 = lst[p2.reportTo].name;
        return pp1 < pp2 ? 1 : pp1 === pp2 ? 0 : -1;
      },
    },
  ];

  if (onEdit) {
    cols.push({
      extractor: (p: Subsector) => (
        <IconButton onClick={() => onEdit(p.id)}>
          <EditIcon />
        </IconButton>
      ),
    });
  }

  return (
    <MainList
      lst={Object.values(lst)}
      cols={cols}
      selected={selected}
      selectedOnChange={selectedOnChange}
    />
  );
};

export default EmployeeMainList;
