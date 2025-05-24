import { FC } from "react";
import { Link } from "react-router";
import { BreadcrumbsProps } from "./types";
import useBreadcrumbs from "@hooks/useBreadcumbs";
import "@style/components/header/Breadcrumbs.scss";

const Breadcrumbs: FC<BreadcrumbsProps> = ({ links: propLinks }) => {
    const autoBreadcrumbs = useBreadcrumbs();
    
    const links = propLinks?.length ? propLinks : autoBreadcrumbs;

    return (
        <nav className="breadcrumbs" aria-label="breadcrumb">
            <ol className="breadcrumb">
                {links.map((link, index) => {
                    const isLastItem = index === links.length - 1;
                    
                    return (
                        <li key={index} className={isLastItem ? "disabled" : ""}>
                            {!isLastItem ? (
                                <Link to={link.href}>
                                    {link.label}
                                </Link>
                            ) : (
                                <span>{link.label}</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;