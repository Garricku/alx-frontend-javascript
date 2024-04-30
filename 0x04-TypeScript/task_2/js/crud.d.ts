declare module "crud" {
    export function insertRow(row: RowElement): void;
    export function updateRow(id: RowID, row: RowElement): void;
    export function deleteRow(id: RowID): void;
}
