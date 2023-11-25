import { GoogleSpreadsheet } from 'google-spreadsheet';
import { jwt } from './jwt-token';
import { MemberState } from './spreadhseet-types';

export async function getSpreadsheet(id: string): Promise<GoogleSpreadsheet> {
  const document = new GoogleSpreadsheet(id, jwt);
  await document.loadInfo();

  return document;
}

export function selectSpreadsheet(memberState: MemberState): string {
  switch (memberState) {
    case 'PORTUGAL':
      return '';
    default:
      throw new Error(`${memberState} does not exist.`);
  }
}

export const STATIC_URL_PATH = await getAllUrlStaticPath();

async function getAllUrlStaticPath() {
  const spreadhseet = await getSpreadsheet(process.env.COMMON_DATA_SPREADHSEET_ID ?? '');
  return await spreadhseet.sheetsByIndex[2].getRows(); // all candidates spreadsheet
}
