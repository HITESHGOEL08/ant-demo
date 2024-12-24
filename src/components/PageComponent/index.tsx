import { FC, Suspense } from "react";
import useStyles from "./style.style";
import { GridContent } from "@ant-design/pro-components";

type PageComponentProps = {
    title: string;
    loading: boolean;
    children: React.ReactElement;
    enableButtons?: boolean;
    firstButtonText?: string;
    firstButtonFn?: any;
    enableSecondButton?: boolean;
    SecondButtonText?: string;
    SecondButtonFn?: any;
    enableThreeDots?: boolean;
    threeDotsComponents?: React.ReactElement;
};

const PageComponent: FC<PageComponentProps> = (props) => {
    const { styles } = useStyles();

    return (
        // <GridContent>
        <div
            className={styles.main}>
            <div
                className={styles.topHeader}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.actionButtons} style={{ 'display': props.enableButtons ? "" : "none" }}>
                    hello
                </div>
            </div>

            <Suspense fallback={null} >
                <div className={styles.childComponent}>
                    {props.children}
                </div>
            </Suspense>
        </div>
        // </GridContent>
    );
};
export default PageComponent;
