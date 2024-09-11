/**
 * Formata um número como uma string de moeda no formato brasileiro (BRL).
 *
 * @param {number} value O valor numérico a ser formatado como moeda.
 * @returns {string} O valor formatado como uma string de moeda em reais (BRL).
 *
 * @example
 * formatCurrency(1234.56);
 * // Retorna "R$ 1.234,56"
 *
 * @example
 * formatCurrency(0);
 * // Retorna "R$ 0,00"
 */
export function formatCurrency(value: number) {
  return value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}
