export function priceString(price: number): string {
    return parseFloat(String(price)).toFixed(2);
}