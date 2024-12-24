import { createStyles } from "antd-style";

const useStyles = createStyles(({}) => {
  return {
    colorWeak: {
      filter: "invert(80%)",
    },
    "ant-layout": {
      minHeight: "100vh",
    },
    "ant-pro-sider.ant-layout-sider.ant-pro-sider-fixed": {
      left: "unset",
    },
    ".ant-pro-layout .ant-pro-layout-content": {
      paddingBlock: "0 !important",
      paddingInline: "0 !important",
    },
    canvas: {
      display: "block",
    },
    body: {
      textRendering: "optimizeLegibility",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },
    "ul,ol": {
      listStyle: "none",
    },
    "@media(max-width: 768px)": {
      "ant-table": {
        width: "100%",
        overflowX: "auto",
        "&-thead > tr,    &-tbody > tr": {
          "> th,      > td": {
            whiteSpace: "pre",
            "> span": {
              display: "block",
            },
          },
        },
      },
    },
  };
});

export default useStyles;
