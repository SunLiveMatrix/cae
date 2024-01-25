import { ReactNode, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import styles from './doc-header.module.scss';

export interface DocHeaderProps {
    title: ReactNode;
    description?: ReactNode;
    className?: string;
}

export const DocHeader = ({
    title,
    description,
    className,
}: DocHeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.header}>
                {typeof title === 'string' ? (
                    <h1 className={styles.title}>{title}</h1>
                ) : (
                    title
                )}
                {description ?? (
                    <div className={styles.description}>{description}</div>
                )}
            </div>
        </div>
    );
};
