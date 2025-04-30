export const wordForm = (n: number, forms: [string, string, string]): string => {
    return forms[
      n % 10 === 1 && n % 100 !== 11
        ? 0
        : [2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)
        ? 1
        : 2
    ];
  };