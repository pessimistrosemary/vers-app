import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import HeadcountListWidget from "src/components/HeadcountListWidget";
import { getData } from "src/selectors";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "74vh",
    minHeight: 400,
  },
}));

interface IHeadcountViewProps {}

const HeadcountView: React.FunctionComponent<IHeadcountViewProps> = (props) => {
  const classes = useStyles();
  const { skills, subsectors, forecasts, calEvents, employees } = useSelector(
    getData
  );
  return (
    <div className={classes.root}>
      <HeadcountListWidget
        skills={skills}
        subsectors={subsectors}
        forecasts={forecasts}
        calEvents={calEvents}
        employees={employees}
      />
    </div>
  );
};

export default HeadcountView;
