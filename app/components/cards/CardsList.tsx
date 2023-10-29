import { getSpreadsheet } from '../../google-spreadsheet-client/api';
import { SpreadsheetField } from '../../google-spreadsheet-client/spreadhseet-types';
import { PoliticalGroup } from '../../political-groups/[acronym]/political-group-dto';
import PoliticalGroupCard from './PoliticalGroupCard';

interface CardsListProps {
  theme: string
}

export default async function CardsList({ theme }: CardsListProps) {
  const politicalGroups = await getAllPoliticalGroups();

  return (
    <div className={`avatar-list-container avatar-list-container avatar-list-container--${theme}`}>
      {politicalGroups.map(pg => (
        <PoliticalGroupCard key={pg.id} politicalGroup={pg} />
      ))}
    </div>
  );
};

export async function getAllPoliticalGroups(): Promise<PoliticalGroup[]> {
  const spreadhseet = await getSpreadsheet(process.env.COMMON_DATA_SPREADHSEET_ID ?? '');
  const politicalGroups = await spreadhseet.sheetsByIndex[0].getRows();

  return politicalGroups.map((pg, index) => ({
    id: index,
    acronym: pg.get(SpreadsheetField.ACRONYM),
    name: pg.get(SpreadsheetField.NAME),
    logoUrl: pg.get('LOGO_URL')
  }))
  // return Promise.resolve([{
  //   id: 1,
  //   acronym: 'test-acronym',
  //   name: 'test-name',
  //   logoUrl: 'test-url'
  // }])
}
