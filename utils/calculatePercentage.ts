/**
 *
 * @param part number
 * @param total number
 * @returns string with postfix %
 */
export default function calculatePercentage(part: number, total: number) {
  const percentage = (part / total) * 100;
  const roundPercenrage = Math.round((percentage + Number.EPSILON) * 100) / 100;
  return `${roundPercenrage}%`;
}
