import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { Employee, Subsector, Department } from "src/kernel";
import MyDialog from "src/components/commons/Dialog";
import EmployeeForm from "src/components/forms/EmployeeForm";
import EmployeeList from "src/components/lists/EmployeeMainList";
import ListWidget from "./commons/ListWidget";
import ExcelUploadForm from "./forms/ExcelUploadForm";

const useStyles = makeStyles((theme) => ({
  title: {
    height: "15%",
  },
  form: {
    maxWidth: "60vw",
    width: "fit-content",
    minWidth: 300,
  },
  formTitle: {
    height: "15%",
  },
  formContent: {
    height: "85%",
  },
}));

interface IEmployeeListWidgetProps {
  lst: { [id: number]: Employee };
  subsectorLst: { [id: number]: Subsector };
  departmentLst: { [id: number]: Department };
  newEmployee?: Employee;
  feedback?: any;
  edit?: boolean;
  onSubmit: (p: Employee) => void;
  onDelete: (...ps: Employee[]) => void;
  onReset: () => void;
  uploadExcel?: (file: File) => void;
  downloadExcel?: () => void;
}

const EmployeeListWidget: React.FunctionComponent<IEmployeeListWidgetProps> = (
  props
) => {
  const classes = useStyles();
  const {
    lst,
    subsectorLst,
    departmentLst,
    newEmployee,
    feedback,
    edit = true,
    onSubmit,
    onDelete,
    onReset,
    uploadExcel,
    downloadExcel,
  } = props;

  const [selected, setSelected] = React.useState<number[]>([]);
  React.useEffect(() => {
    setSelected([]);
  }, []);
  const handleDeleteOnClick = () => {
    onDelete(...selected.map((x) => lst[x]));
    setSelected([]);
  };

  const [formOpen, setFormOpen] = React.useState(false);
  const [formData, setFormData] = React.useState(newEmployee);
  React.useEffect(() => {
    setFormData(newEmployee);
  }, [newEmployee]);
  React.useEffect(() => {
    setFormOpen(!!feedback);
  }, [feedback]);

  const handleSubmit = (data: Employee) => {
    onSubmit(data);
    setFormOpen(false);
  };
  const handleEditOnClick = (id: number) => {
    setFormData(lst[id]);
    setFormOpen(true);
  };

  const handleCreateOnClick = () => {
    setFormData(newEmployee);
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
    onReset();
  };

  const handleExcelDownloadClick = () => {
    downloadExcel && downloadExcel();
  };

  const [excelFormOpen, setExcelFormOpen] = React.useState(false);
  const handleExcelUploadClick = () => {
    setExcelFormOpen(true);
  };

  const handleExcelFormClose = () => {
    setExcelFormOpen(false);
  };

  const handleExcelFileUpload = (file: File) => {
    uploadExcel && uploadExcel(file);
    handleExcelFormClose();
  };

  return (
    <ListWidget
      title="Employees"
      disableCreate={!edit}
      disableDelete={selected.length === 0 || !edit}
      createOnClick={handleCreateOnClick}
      deleteOnClick={handleDeleteOnClick}
      downloadOnClick={handleExcelDownloadClick}
      uploadOnClick={handleExcelUploadClick}
    >
      <EmployeeList
        lst={lst}
        subsectorLst={subsectorLst}
        selected={selected}
        selectedOnChange={setSelected}
        onEdit={edit ? handleEditOnClick : undefined}
      />
      <MyDialog open={formOpen} onClose={handleFormClose}>
        <div className={classes.form}>
          <div className={classes.formTitle}>
            <Typography
              className={classes.title}
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              {formData && formData.id === -1
                ? "Create New Employee"
                : "Edit Employee"}
            </Typography>
          </div>
          <div className={classes.formContent}>
            {formData ? (
              <EmployeeForm
                data={formData}
                employeeLst={lst}
                subsectorLst={subsectorLst}
                departmentLst={departmentLst}
                feedback={feedback}
                onSubmit={handleSubmit}
                onCancel={handleFormClose}
              />
            ) : null}
          </div>
        </div>
      </MyDialog>
      <MyDialog open={excelFormOpen} onClose={handleExcelFormClose}>
        <div className={classes.form}>
          <div className={classes.formTitle}>
            <Typography
              className={classes.title}
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Upload Excel Data
            </Typography>
          </div>
          <div className={classes.formContent}>
            <ExcelUploadForm
              feedback={feedback}
              onSubmit={handleExcelFileUpload}
              onCancel={handleExcelFormClose}
            />
          </div>
        </div>
      </MyDialog>
    </ListWidget>
  );
};

export default EmployeeListWidget;
