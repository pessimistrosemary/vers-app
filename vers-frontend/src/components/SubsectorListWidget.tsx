import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { Sector, Subsector } from "src/kernel";
import MyDialog from "src/components/commons/Dialog";
import SubsectorForm from "src/components/forms/SubsectorForm";
import SubsectorList from "src/components/lists/SubsectorMainList";
import ListWidget from "./ListWidget";

const useStyles = makeStyles((theme) => ({
  title: {
    height: "15%",
  },
  form: {
    maxWidth: "60vw",
    width: 1000,
    minWidth: 300,
  },
  formTitle: {
    height: "15%",
  },
  formContent: {
    height: "85%",
  },
}));

interface ISubsectorListWidgetProps {
  lst: { [id: number]: Subsector };
  sectorLst: { [id: number]: Sector };
  newSubsector?: Subsector;
  feedback?: any;
  edit?: boolean;
  onSubmit: (p: Subsector) => void;
  onDelete: (...ps: Subsector[]) => void;
  onReset: () => void;
  uploadExcel?: (file: File) => void;
  downloadExcel?: () => void;
}

const SubsectorListWidget: React.FC<ISubsectorListWidgetProps> = (
  props
) => {
  const classes = useStyles();
  const {
    lst,
    sectorLst,
    newSubsector,
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
  const [formData, setFormData] = React.useState<Subsector>();
  React.useEffect(() => {
    setFormData(formData => formData ?? newSubsector);
  }, [newSubsector]);
  React.useEffect(() => {
    setFormOpen(!!feedback);
  }, [feedback]);

  const handleSubmit = (data: Subsector) => {
    onSubmit(data);
    setFormOpen(false);
  };
  const handleEditOnClick = (id: number) => {
    setFormData(lst[id]);
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
    onReset();
  };

  const handleCreateOnClick = () => {
    setFormData(newSubsector);
    setFormOpen(true);
  };

  return (
    <ListWidget
      title="Subsectors"
      disableCreate={!edit}
      disableDelete={selected.length === 0 || !edit}
      createOnClick={handleCreateOnClick}
      deleteOnClick={handleDeleteOnClick}
      downloadExcel={downloadExcel}
      uploadExcel={uploadExcel}
      excelTemplateUrl={process.env.REACT_APP_EXCEL_SUBSECTOR_TEMPLATE_URL}
    >
      <SubsectorList
        lst={lst}
        sectorLst={sectorLst}
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
                ? "Create New Subsector"
                : "Edit Subsector"}
            </Typography>
          </div>
          <div className={classes.formContent}>
            {formData ? (
              <SubsectorForm
                data={formData}
                sectorLst={sectorLst}
                feedback={feedback}
                onSubmit={handleSubmit}
                onCancel={handleFormClose}
              />
            ) : null}
          </div>
        </div>
      </MyDialog>
    </ListWidget>
  );
};

export default SubsectorListWidget;
