export default function numberToMoney(
  number: number,
  locale = "pt-br",
  currency = "BRL"
): string {
  return number.toLocaleString(locale, { style: "currency", currency });
}
