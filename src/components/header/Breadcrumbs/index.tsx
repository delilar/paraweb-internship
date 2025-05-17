import { FC } from "react";
import { BreadcrumbsProps } from "./types";
import useBreadcrumbs from "@hooks/useBreadcumbs";
import Link from "@components/Link";
import "@style/components/header/Breadcrumbs.scss";

const Breadcrumbs: FC<BreadcrumbsProps> = ({ links: propLinks }) => {
    const autoBreadcrumbs = useBreadcrumbs();
    
    const links = propLinks?.length ? propLinks : autoBreadcrumbs;

    return (
        <nav className="breadcrumbs" aria-label="breadcrumb">
            <ol className="breadcrumb">
                {links.map((link, index) => (
                    <li key={index} className={link.disabled ? "disabled" : ""}>
                        {link.href && !link.disabled ? (
                            <Link 
                                type="underlined" 
                                link={link.href}
                            >
                                {link.label}
                            </Link>
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