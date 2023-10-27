import { PoliticalGroup } from '../../political-group/[acronym]/political-group-dto';
import RoundAvatar from './avatar';

interface AvatarListProp {
  theme: string
}

export default async function AvatarList({ theme }: AvatarListProp) {
  // const [hasMounted, setHasMounted] = useState(false);

  // useEffect(() => {
  //   setHasMounted(true);
  // }, []);

  // if (!hasMounted) {
  //   return null;
  // }

  const politicalGroups = await getAllPoliticalGroups();

  return (
    <div className={`avatar-list-container avatar-list-container avatar-list-container--${theme}`}>
      {politicalGroups.map(pg => (
        <RoundAvatar key={pg.id} politicalGroup={pg} />
      ))}
    </div>
  );
};

export async function getAllPoliticalGroups(): Promise<PoliticalGroup[]> {
  // const spreadhseet = await getSpreadsheet(process.env.COMMON_DATA_SPREADHSEET_ID ?? '');
  // const politicalGroups = await spreadhseet.sheetsByIndex[0].getRows();

  //   return politicalGroups.map((pg, index) => ({
  //     id: index,
  //     acronym: pg.get(SpreadsheetField.ACRONYM),
  //     name: pg.get(SpreadsheetField.NAME),
  //     logoUrl: ''
  //   }))
  return Promise.resolve([{
    id: 1,
    acronym: 'acronym',
    name: 'name',
    logoUrl: ''
  }])
}
