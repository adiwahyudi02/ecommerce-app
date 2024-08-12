/**
 *
 * @param amount number
 * @returns string with prefix Rp.
 */
export default function rupiahPrefix(amount: number | string) {
  return `Rp. ${amount}`;
}
