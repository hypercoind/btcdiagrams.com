import { ComponentType } from 'react';
import { HowBitcoinWorksThumbnail } from './HowBitcoinWorksThumbnail';
import { WalletTypesThumbnail } from './WalletTypesThumbnail';
import { BlockchainStructureThumbnail } from './BlockchainStructureThumbnail';
import { TransactionLifecycleThumbnail } from './TransactionLifecycleThumbnail';
import { SupplyScheduleThumbnail } from './SupplyScheduleThumbnail';

export interface ThumbnailComponentProps {
  className?: string;
}

export const thumbnailComponents: Record<string, ComponentType<ThumbnailComponentProps>> = {
  'how-bitcoin-works': HowBitcoinWorksThumbnail,
  'wallet-types': WalletTypesThumbnail,
  'blockchain-structure': BlockchainStructureThumbnail,
  'transaction-lifecycle': TransactionLifecycleThumbnail,
  'supply-schedule': SupplyScheduleThumbnail,
};

export function getThumbnailComponent(slug: string): ComponentType<ThumbnailComponentProps> | undefined {
  return thumbnailComponents[slug];
}
