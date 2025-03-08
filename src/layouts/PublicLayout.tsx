import { FC } from "react";
import { Outlet } from "react-router";

const PublicLayout: FC = () => {
    return (
        <div className="public-layout">
            <header>

            </header>
            <main>
                <Outlet />
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default PublicLayout;