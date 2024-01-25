import { createBoard } from '@wixc3/react-board';
import { DashboardLayout } from '../../../components/dashboard-layout/dashboard-layout';
import styles from './dashboard-layout.board.module.scss';

export default createBoard({
    name: '🧩 Dashboard Layout',
    Board: () => (
        <DashboardLayout>
            <div className={styles.root}>Page Content</div>
        </DashboardLayout>
    ),
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 1,
            bottom: 1,
        },
        windowWidth: 1600,
        windowHeight: 800,
    },
    isSnippet: true,
});
