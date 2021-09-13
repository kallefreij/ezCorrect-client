export const randomColor = (inputString: string) => {
  let hash: number = 0;
  let i: number = 0;

  inputString = inputString ? inputString : '';

  /* tslint:disable:no-bitwise */
  for (i = 0; i < inputString.length; i += 1) {
    hash = inputString.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* tslint:enable:no-bitwise */

  return color;
};
