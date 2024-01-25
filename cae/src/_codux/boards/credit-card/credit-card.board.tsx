import { createBoard } from '@wixc3/react-board';
import { CreditCard } from '../../../components/credit-card/credit-card';
import styles from './credit-card.board.module.scss';

export default createBoard({
    name: 'Credit Card',
    Board: () => (
        <div className={styles.root}>
            <CreditCard
                logo="Cloudcash"
                cardNumberStartsWith="5789"
                cardNumberEndsWith="2847"
                cardHolderName="Mike Smith"
                expireDateMonth="06"
                expireDateYear="22"
            />
        </div>
    ),
    environmentProps: {
        canvasWidth: 874,
        canvasMargin: {
            top: 1,
            left: 0,
            right: 0,
            bottom: 1,
        },
    },
    isSnippet: true,
});
