import * as React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
  className?: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, className, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      className={className}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

interface TabPage {
  name: string;
  tabPanelClass?: string;
  node: React.ReactNode;
}

interface FullWidthTabsProps {
  tabsClass?: string;
  pages: TabPage[];
}

const FullWidthTabs: React.FC<FullWidthTabsProps> = (props) => {
  const { tabsClass, pages } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Paper square className={tabsClass}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {pages.map((x, idx) => (
            <Tab key={idx} label={x.name} {...a11yProps(idx)} />
          ))}
        </Tabs>
      </Paper>
      {pages.map((x, idx) => (
        <TabPanel
          key={idx}
          value={value}
          index={idx}
          className={x.tabPanelClass}
        >
          {x.node}
        </TabPanel>
      ))}
    </React.Fragment>
  );
};

export type { TabPage };
export default FullWidthTabs;
