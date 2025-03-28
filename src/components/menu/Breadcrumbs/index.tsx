import { FC } from "react";
import { BreadcrumbsProps } from "./types";
import "@style/components/menu/Breadcrumbs.scss";

const Breadcrumbs: FC<BreadcrumbsProps> = ({ links }) => {
    return (
        <nav className="breadcrumbs" aria-label="breadcrumb">
            <ol className="breadcrumb">
                {links.map((link, index) => (
                    <li key={index} className={link.disabled ? "disabled" : ""}>
                        {link.href && !link.disabled ? (
                            <a href={link.href}>{link.label}</a>
                        ) : (
                            <span>{link.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
