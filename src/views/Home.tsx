import { FC, useState } from "react";

import PencilIcon from '@images/icons/pencil.svg'
import PlusIcon from '@images/icons/plus.svg'
import UserIсon from '@images/icons/user.svg'
import TelegramIcon from '@images/social/social-tg.svg'
import LayoulistIcon from "@images/icons/layout-list.svg";
import CalendarIcon from "@images/icons/calendar.svg";

import { SwitcherItem } from "@/components/Switcher/types";
import { CheckboxOption, SocialOption } from "@/components/Select/types";

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
import DocumentCard from "@/components/cards/DocumentCard";
import Tab from "@/components/Tab";
import Tag from "@/components/Tag";
import Breadcrumbs from "@/components/menu/Breadcrumbs";
import HeaderMenu from "@/components/menu/HeaderMenu";
import Switcher from "@/components/Switcher";
import Toggle from "@/components/Toggle";
import Select from "@/components/Select";
import TextField from "@/components/TextField";
const Home: FC = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [currentView, setCurrentView] = useState<string>('layout-list');

    const switcherItems: SwitcherItem[] = [
        {
          id: 'layout-list',
          icon: LayoulistIcon
        },
        {
          id: 'calendar',
          icon: CalendarIcon
        }
      ];

      const checkboxOptions: CheckboxOption[] = [
        { id: 1, label: 'Вариант-1', type: 'checkbox' },
        { id: 2, label: 'Вариант-2', type: 'checkbox' },
        { id: 3, label: 'Вариант-3', type: 'checkbox', checked: true },
        { id: 4, label: 'Вариант-4', type: 'checkbox' },
        { id: 5, label: 'Вариант-5', type: 'checkbox' }
      ];
      
      const socialOptions: SocialOption[] = [
        { id: 1, label: 'ВКонтакте', type: 'social', link: 'vk.com', socialType: 'vk' },
        { id: 2, label: 'Телеграм', type: 'social', link: 't.me', socialType: 'tg' },
        { id: 3, label: 'Лидер ID', type: 'social', link: 'leader-id.ru', socialType: 'id' },
        { id: 4, label: 'WhatsApp', type: 'social', link: 'whatsapp.com', socialType: 'whatsapp' }
      ];

    const handleViewChange = (selectedId: string) => {
        setCurrentView(selectedId);
        console.log(`View changed to: ${selectedId}`);
      };


    return (
        <div style={{
            backgroundColor: 'gray',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '3rem',
            padding: '3rem',
        }}>
            <h1>Home</h1>
            <Alert type="success" position="top-right" />
            <Alert type="error" />
            <Pagination totalItems={50} itemsPerPage={5} page={currentPage} onChange={(e, newPage) => setCurrentPage(newPage)}/>
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
            <DocumentCard href="#"/>
            <Link type="underlined">Text</Link>
            <Link type="social" socialType="tg">Text</Link>
            <Link type="icon">Link</Link>
            <Tab count={100} label="Text" />
            <Tag type="primary" mainValue="Наука" color="green" />
            <Tag type="deletable" mainValue="Английский" secondaryValue="C1" color="gray" />
            <Breadcrumbs links={[{label: "Первый пункт", href: "https://www.google.com/"}, {label: "Второй пункт", href: "https://www.google.com/", disabled: true}]} />
            <HeaderMenu links={[{label: "Первый пункт", href: "https://www.google.com/"}, {label: "Второй пункт", href: "https://www.google.com/", disabled: true}]} />
            <Switcher 
                items={switcherItems}
                defaultSelected={currentView}
                onChange={handleViewChange}
            />
            <Toggle />
            <Select variant="normal" options={socialOptions} />
            <Select variant="small" options={checkboxOptions} />
            <Select 
              variant="normal" 
              options={checkboxOptions} 
              label="Выберите дату"
              prefixIcon={<CalendarIcon />}
            />
            <TextField prefixIcon={<CalendarIcon />} type="password"/>
        </div>
    );
}

export default Home;