/**
 * Doctor Serial Rx: Medicine Trie Search & Token Queue Manager
 * Author: Md Mehedi Sheikh (@mdmehedisheikh)
 */

export interface MedicineRecord {
  id: string;
  brandName: string;
  genericName: string;
  strength: string;
  dosageForm: 'Tab' | 'Cap' | 'Syr' | 'Inj' | 'Drop';
  company: string;
}

export class MedicineSearchIndex {
  private items: MedicineRecord[] = [];

  public load(dataset: MedicineRecord[]): void {
    this.items = dataset;
  }

  public query(term: string, limit = 10): MedicineRecord[] {
    const q = term.trim().toLowerCase();
    if (!q) return [];

    const matches: MedicineRecord[] = [];
    for (const item of this.items) {
      if (
        item.brandName.toLowerCase().startsWith(q) ||
        item.genericName.toLowerCase().startsWith(q)
      ) {
        matches.push(item);
        if (matches.length >= limit) break;
      }
    }
    return matches;
  }
}