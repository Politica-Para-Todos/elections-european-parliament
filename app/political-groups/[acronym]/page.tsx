import ProfileHeader from '../../components/header/ProfileHeader';
import PartiesList from '../../components/party/PartiesList';
import { getSpreadsheet } from '../../google-spreadsheet-client/spreadhseet';
import { SpreadsheetField } from '../../google-spreadsheet-client/spreadhseet-types';
import { convertPoliticalGroupAcronymToUrl } from '../../utils/converter';
import { PoliticalGroupEnum, PoliticalGroupEnumUrl } from './political-group-dto';

interface PoliticalGroupProp {
  params: {
    acronym: string
  }
}

export default async function PoliticalGroupPage({ params }: PoliticalGroupProp) {
  const acronym = decodeURIComponent(params.acronym) as PoliticalGroupEnumUrl;

  return (
    <>
      <ProfileHeader politicalGroupAcronym={acronym} subtitle='' />
      {/* <LayoutIntro title='Parties'> */}
      {/* <Paragraph>Member parties</Paragraph> */}
      {/* </LayoutIntro > */}
      < PartiesList politicalGroupAcronym={acronym as PoliticalGroupEnumUrl} />
    </>
  )
}

export async function generateStaticParams(): Promise<PoliticalGroupEnumUrl[]> {
  return await getAllPoliticalGroupsAcronyms();
}

async function getAllPoliticalGroupsAcronyms(): Promise<PoliticalGroupEnumUrl[]> {
  const spreadhseet = await getSpreadsheet(process.env.COMMON_DATA_SPREADHSEET_ID ?? '');
  const politicalGroupSheet = await spreadhseet.sheetsByIndex[0].getRows();

  return politicalGroupSheet.map(pg => convertPoliticalGroupAcronymToUrl(pg.get(SpreadsheetField.ACRONYM) as PoliticalGroupEnum))
}
