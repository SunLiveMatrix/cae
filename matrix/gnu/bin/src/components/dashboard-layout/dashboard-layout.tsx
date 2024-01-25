import classNames from 'classnames';
import { Sidebar } from '../sidebar/sidebar';
import styles from './dashboard-layout.module.scss';

interface DashboardLayoutProps {
    className?: string;
    children: React.ReactNode;
}

export const DashboardLayout = ({
    children,
    className,
}: DashboardLayoutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Sidebar className={styles.sidebar} />
            <div className={styles.pageContent}>{children}</div>
        </div>
    );
};
