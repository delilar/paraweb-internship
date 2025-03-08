import { FC, useState } from "react";
import { Outlet, Navigate } from "react-router";

const PrivateLayout: FC = () => {
    const [isAthenticated, setIsAthenticated] = useState(true);

    if (!isAthenticated) {
        <Navigate to="/login" />
    }

    return (
        <div className="private-layout">
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

export default PrivateLayout;