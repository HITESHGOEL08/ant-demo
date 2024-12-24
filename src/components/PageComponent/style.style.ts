import { createStyles } from "antd-style";

const useStyles = createStyles(({ token }) => {
  return {
    main: {
      // display: 'flex',
      width: "100%",
      height: "100%",
      padding: "16px 0",
      // paddingBottom: "16px",
      //
      ".ant-list-split .ant-list-item:last-child": {
        borderBottom: `1px solid ${token.colorSplit}`,
      },
      ".ant-list-item": { paddingTop: "14px", paddingBottom: "14px" },
      [`@media screen and (max-width: ${token.screenMD}px)`]: {
        flexDirection: "column",
      },
    },
    topHeader: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "30px",
      backgroundColor: token.colorBgContainer,
      padding: "0 40px",
    },
    title: {
      marginBottom: "12px",
      color: token.colorTextHeading,
      fontWeight: "500",
      fontSize: "24px",
      lineHeight: "28px",
    },
    childComponent: {
      padding: "16px 50px",
    },
    actionButtons: {},
    leftMenu: {
      width: "224px",
      borderRight: `${token.lineWidth}px solid ${token.colorSplit}`,
      ".ant-menu-inline": { border: "none" },
      ".ant-menu-horizontal": { fontWeight: "bold" },
      [`@media screen and (max-width: ${token.screenMD}px)`]: {
        width: "100%",
        border: "none",
      },
    },
    right: {
      flex: "1",
      padding: "8px 40px",
      [`@media screen and (max-width: ${token.screenMD}px)`]: {
        padding: "40px",
      },
    },
  };
});

export default useStyles;
