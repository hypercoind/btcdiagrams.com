import { ComponentType } from 'react';
import { HowBitcoinWorks } from './HowBitcoinWorks';
import { WalletTypes } from './WalletTypes';
import { BlockchainStructure } from './BlockchainStructure';
import { TransactionLifecycle } from './TransactionLifecycle';
import { SupplySchedule } from './SupplySchedule';

export interface DiagramComponentProps {
  className?: string;
}

export const diagramComponents: Record<string, ComponentType<DiagramComponentProps>> = {
  'how-bitcoin-works': HowBitcoinWorks,
  'wallet-types': WalletTypes,
  'blockchain-structure': BlockchainStructure,
  'transaction-lifecycle': TransactionLifecycle,
  'supply-schedule': SupplySchedule,
};

export function getDiagramComponent(slug: string): ComponentType<DiagramComponentProps> | undefined {
  return diagramComponents[slug];
}
