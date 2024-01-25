import { createBoard } from '@wixc3/react-board';
import PageHeader from '../../../components/page-header/page-header';
import styles from './page-header.board.module.scss';

export default createBoard({
    name: '🧩 Page Header',
    Board: () => (
        <PageHeader>
            <div className={styles.root}>Page Header Content</div>
        </PageHeader>
    ),
    environmentProps: {
        windowWidth: 1600,
        canvasMargin: {
            left: 0,
            right: 0,
            top: 0,
        },
    },
    isSnippet: true,
});
