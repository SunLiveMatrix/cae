import { createBoard } from '@wixc3/react-board';
import { CreditCardSvg } from '../../../components/credit-card-svg/credit-card-svg';

export default createBoard({
    name: 'Credit Card SVG',
    Board: () => (
        <CreditCardSvg
            logo="Cloudcash"
            cardNumberStartsWith="5789"
            cardNumberEndsWith="2847"
            cardHolderName="Mike Smith"
            expireDateMonth="06"
            expireDateYear="22"
        />
    ),
    environmentProps: {
        canvasWidth: 874,
        canvasMargin: {
            left: 0,
            right: 0,
            top: 1,
            bottom: 1,
        },
    },
    isSnippet: true,
});
