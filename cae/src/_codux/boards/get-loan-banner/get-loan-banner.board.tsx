import { createBoard } from '@wixc3/react-board';
import { GetLoanBanner } from '../../../components/get-loan-banner/get-loan-banner';
import styles from './get-loan-banner.board.module.scss';

export default createBoard({
    name: '🧩 Get Loan Banner',
    Board: () => (
        <div className={styles.root}>
            <GetLoanBanner />
        </div>
    ),
    isSnippet: true,
});
