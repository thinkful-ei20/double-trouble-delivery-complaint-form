export const required = value => !value ? 'This field is required' : undefined;

export const nonEmpty = value => !value.trim() ? 'It cannot be empty' : undefined;

export const mustBe5 = value => value.toString().length !== 5 ? 'Must be 5 numbers long' : undefined;

export const allNumbers = value => (/^[0-9]*$/gm).test(value) ? undefined : 'Must be all numbers';