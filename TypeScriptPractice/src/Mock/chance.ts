import Chance from 'chance';
const chance = new Chance();

export const randomUUID = (): string => chance.guid();
export const randomName = (): string => chance.name();
export const randomEmial = (): string => chance.email();
export const randomId = (): string => chance.fbid();
export const randomJobTitle = (): string => chance.profession();
export const randomCompanyName = () => chance.company();
export const randomSentence = (words = 5) => chance.sentence({ words });
export const randomParagraph = (sentences = 3) => chance.paragraph({ sentences });
