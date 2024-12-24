import { FC, Suspense } from "react";
import useStyles from "./style.style";
import { GridContent } from "@ant-design/pro-components";

type PageComponentProps = {
    title: string;
    loading: boolean;
    children: React.ReactElement;
};

const PageComponent: FC<PageComponentProps> = (props) => {
    const { styles } = useStyles();

    return (
        <GridContent>
            <>
                <div>
                    <div>{props.title}</div>
                </div>

                <Suspense fallback={null}>{props.children}</Suspense>
            </>
        </GridContent>
    );
};
export default PageComponent;
