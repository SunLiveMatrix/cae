import Card from '../card/card';
import { CardsDetail } from './cards-detail/cards-detail';
import { CreditCardSvg } from '../credit-card-svg/credit-card-svg';
import styles from './cards.module.scss';

interface CardsProps {
    className?: string;
}

export const Cards = ({ className }: CardsProps) => {
    return (
        <Card className={className}>
            <Card.Title>Cards</Card.Title>
            <Card.Content className={styles.content}>
                <div className={styles.creditCardSection}>
                    <CreditCardSvg
                        className={styles.creditCard}
                        logo="Cloudcash"
                        cardNumberStartsWith="5789"
                        cardNumberEndsWith="2847"
                        cardHolderName="Mike Smith"
                        expireDateMonth="06"
                        expireDateYear="22"
                    />
                </div>

                <div className={styles.details}>
                    <CardsDetail
                        currency="$"
                        label="Current Balance"
                        amount={12000}
                        emphasized
                    />
                    <CardsDetail
                        currency="$"
                        label="Income"
                        amount={1500}
                        trend="positive"
                    />
                    <CardsDetail
                        currency="$"
                        label="Outcome"
                        amount={350.2}
                        trend="negative"
                    />
                </div>
            </Card.Content>
        </Card>
    );
};
