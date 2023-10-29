import { PoliticalGroupEnum, PoliticalGroupEnumUrl } from '../political-groups/[acronym]/political-group-dto';

export function convertPoliticalGroupAcronymToUrl(acronym: PoliticalGroupEnum): PoliticalGroupEnumUrl {
  switch (acronym) {
    case 'EPP':
      return 'epp';
    case 'S&D':
      return 's&d';
    case 'Renew':
      return 'renew';
    case 'Greens-EFA':
      return 'greens-efa';
    case 'ECR':
      return 'ecr';
    case 'ID':
      return 'id';
    case 'GUE-NGL':
      return 'gue-ngl';
    case 'N-I':
      return 'n-i';
    default:
      throw new Error(`${acronym} is not a valid Political Group`);
  }
}

export function convertPoliticalGroupUrlToAcronym(acronym: PoliticalGroupEnumUrl): PoliticalGroupEnum {
  switch (acronym) {
    case 'epp':
      return 'EPP';
    case 's&d':
      return 'S&D';
    case 'renew':
      return 'Renew';
    case 'greens-efa':
      return 'Greens-EFA';
    case 'ecr':
      return 'ECR';
    case 'id':
      return 'ID';
    case 'gue-ngl':
      return 'GUE-NGL';
    case 'n-i':
      return 'N-I';
    default:
      throw new Error(`${acronym} is not a valid Political Group url`);
  }
}
