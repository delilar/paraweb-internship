import { FC } from "react";

import TextContent from "@/components/TextContent";

const Admin: FC = () => {

    return (
        <>
            <TextContent html={`
                    <h2>Заголовок страницы</h2>
                    <p>Контент страницы</p>
                `} />
        </>
    );
}

export default Admin