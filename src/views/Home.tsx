import { FC } from "react";

import PencilIcon from '@images/icons/pencil.svg'
import PlusIcon from '@images/icons/plus.svg'
import UserIсon from '@images/icons/user.svg'
import TelegramIcon from '@images/social/social-tg.svg'

import PartnerCard from "../components/cards/PartnerCard";
import Alert from "../components/Alert";
import Pagination from "@/components/Pagiantion";
import Checkbox from "@/components/selection/Checkbox";
import Radiobutton from "@/components/selection/Radiobutton";
import Button from "@/components/buttons/Button";
import IconButton from "@/components/buttons/IconButton";
import UserIconButton from "@/components/buttons/UserIconButton";
import SocialButton from "@/components/buttons/SocialButton";
import CommunitieCard from "@/components/cards/CommunitieCard";
import ProductCard from "@/components/cards/ProductCard";
import LevelCard from "@/components/cards/LevelCard";
import EventCard from "@/components/cards/EventCard";
import Link from "@/components/Link";
import Dropdown from "@/components/DropDown";
import DocumentCard from "@/components/cards/DocumentCard";
import Tab from "@/components/Tab";
import Tag from "@/components/Tag";
import Breadcrumbs from "@/components/menu/Breadcrumbs";
import HeaderMenu from "@/components/menu/HeaderMenu";
import Switcher from "@/components/Switcher";
import Toggle from "@/components/Toggle";

const Home: FC = () => {
    return (
        <div style={{
            backgroundColor: 'gray',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '3rem',
            padding: '3rem',
        }}>
            <h1>Home</h1>
            <Alert type="success" />
            <Alert type="error" />
            <Pagination count={15}/>
            <Checkbox label="texts" />
            <Radiobutton label="text" />
            <Button iconLeft={PencilIcon} iconRight={PlusIcon}> Кнопка </ Button>
            <Button iconLeft={PencilIcon} iconRight={PlusIcon} variant="outlined"> Кнопка </ Button>
            <Button iconLeft={PencilIcon} iconRight={PlusIcon} variant="text"> Кнопка </ Button>
            <Button iconLeft={PencilIcon} iconRight={PlusIcon} variant="text-lower" > Кнопка </ Button>
            <Button iconLeft={PencilIcon} iconRight={PlusIcon} onContrastBackground > Кнопка </ Button>
            <IconButton variant="filled" icon={<PencilIcon />} />
            <IconButton variant="outlined" icon={<PencilIcon />} />
            <IconButton variant="hovered" icon={<PencilIcon />} />
            <IconButton variant="contrast-hovered" icon={<PencilIcon />} />
            <IconButton variant="contrast-filled" icon={<PencilIcon />} />
            <UserIconButton icon={<UserIсon />} />
            <SocialButton icon={<TelegramIcon />} >Telegram</SocialButton>
            <PartnerCard title="Название партнёра" linkText="link.ru" link="telegram.org" contactPerson="Константинопольский Константин Константинович" phone="+7 (812) 710-64-82" email="wsr@guap.ru" socialLinks={[{type: "tg", link: "telegram.org"}]}/>
            <CommunitieCard />
            <ProductCard />
            <LevelCard />
            <EventCard startDate={new Date("2025-04-28T12:30:00.000Z")} endDate={new Date("2025-04-28T16:00:00.000Z")}/>
            <DocumentCard />
            <Link type="underlined">Text</Link>
            <Link type="social" socialType="tg">Text</Link>
            <Link type="icon">Link</Link>
            <Dropdown optionsData={[{id: 1, label: "Option 1"}, {id: 2, label: "Option 2"}]}/>
            <Tab count={100} label="Text" />
            <Tag type="primary" mainValue="Наука" color="green" />
            <Tag type="deletable" mainValue="Английский" secondaryValue="C1" color="gray" />
            <Breadcrumbs links={[{label: "Первый пункт", href: "https://www.google.com/"}, {label: "Второй пункт", href: "https://www.google.com/", disabled: true}]} />
            <HeaderMenu links={[{label: "Первый пункт", href: "https://www.google.com/"}, {label: "Второй пункт", href: "https://www.google.com/", disabled: true}]} />
            <Switcher />
            <Toggle />
        </div>
    );
}

export default Home;