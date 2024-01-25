import classNames from 'classnames';
import Nav from '../nav/nav';
import { Icon } from '../icon/icon';
import { Button } from '../button/button';
import styles from './sidebar.module.scss';

const logo =
    'https://static.wixstatic.com/shapes/610b66_0f8db3b01d974d6eb901be219f385e3f.svg'; // logo.svg (135x34)
const upgradeTeaser =
    'https://static.wixstatic.com/shapes/610b66_18689aa2b4264e318355751f25a15cce.svg'; // sidebar-footer-upgrade.svg (67x75)

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={logo} alt="Cloudcash logo" />
            <Nav className={styles.nav}>
                <Nav.Item selected>
                    <Icon glyph="insights" aria-hidden />
                    Overview
                </Nav.Item>

                <Nav.Item>
                    <Icon glyph="list" aria-hidden />
                    Transactions
                </Nav.Item>

                <Nav.Item>
                    <Icon glyph="creditCard" aria-hidden />
                    Cards
                </Nav.Item>

                <Nav.Item>
                    <Icon glyph="draft" aria-hidden />
                    Invoices
                </Nav.Item>

                <Nav.Item>
                    <Icon glyph="verified" aria-hidden />
                    Goals
                </Nav.Item>

                <Nav.Item>
                    <Icon glyph="settings" aria-hidden />
                    Settings
                </Nav.Item>
            </Nav>
            <div className={styles.footer}>
                <img
                    src={upgradeTeaser}
                    className={styles.footerIllustration}
                    aria-hidden
                    alt=""
                />
                <span className={styles.footerText}>
                    Give your money awesome space in cloud
                </span>
                <Button onClick={() => alert('Navigate to upgrade flow')}>
                    Upgrade to Premium
                </Button>
            </div>
        </div>
    );
};
