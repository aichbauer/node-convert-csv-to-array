const arrayHeader = ['number', 'first', 'last', 'handle'];
const arrayContent = [
  [1, 'Mark', 'Otto', '@mdo'],
  [2, 'Jacob', 'Thornton', '@fat'],
  [3, 'Larry', 'the Bird', '@twitter'],
];
const objectContent = [
  {
    number: 1,
    first: 'Mark',
    last: 'Otto',
    handle: '@mdo',
  },
  {
    number: 2,
    first: 'Jacob',
    last: 'Thornton',
    handle: '@fat',
  },
  {
    number: 3,
    first: 'Larry',
    last: 'the Bird',
    handle: '@twitter',
  },
];

const arrayContentMultiline = [
  [1, 'Mark', `"Ot
to"`, '@mdo'],
  [2, 'Jacob', `"Thor
nton"`, '@fat'],
  [3, 'Larry', `"the
Bird"`, '@twitter'],
];
const objectContentMultiline = [
  {
    number: 1,
    first: 'Mark',
    last: `"Ot
to"`,
    handle: '@mdo',
  },
  {
    number: 2,
    first: 'Jacob',
    last: `"Thor
nton"`,
    handle: '@fat',
  },
  {
    number: 3,
    first: 'Larry',
    last: `"the
Bird"`,
    handle: '@twitter',
  },
];


const escapedSeparatorArray = [
  ['withSeparator', 'withoutSeparator'],
  ['1,2,3', 1],
  ['a,b,c,d', 5],
  ['tersiniearsn,riotesaetn', 6],
];

const escapedSeparatorObject = [
  { withSeparator: '1,2,3', withoutSeparator: 1 },
  { withSeparator: 'a,b,c,d', withoutSeparator: 5 },
  { withSeparator: 'tersiniearsn,riotesaetn', withoutSeparator: 6 },
];

export const expectedResultArrayHeader = [
  arrayHeader,
  ...arrayContent,
];

export const expectedResultArrayWithoutHeader = arrayContent;

export const expectedResultObjectHeader = [
  arrayHeader,
  ...objectContent,
];

export const expectedResultObjectWithoutHeader = objectContent;

export const expectedResultArrayMultiline = arrayContentMultiline;

export const expectedResultObjectMultiline = objectContentMultiline;

export const expectedResultArrayEscapedSeparator = escapedSeparatorArray;

export const expectedResultObjectEscapedSeparator = escapedSeparatorObject;
