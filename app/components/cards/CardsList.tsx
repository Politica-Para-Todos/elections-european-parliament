
interface CardsListProps {
  theme: string
}

export default async function CardsList({ theme }: CardsListProps) {
  // const politicalGroups = await getAllPoliticalGroups();

  return (
    <div className={`avatar-list-container avatar-list-container avatar-list-container--${theme}`}>
      {/* {politicalGroups.map(pg => (
        <PoliticalGroupCard key={pg.id} politicalGroup={pg} />
      ))} */}
    </div>
  );
};

// export async function getAllPoliticalGroups(): Promise<PoliticalGroup[]> {
//   return politicalGroups.map((pg, index) => ({
//     id: index,
//     acronym: pg.get(SpreadsheetField.ACRONYM),
//     name: pg.get(SpreadsheetField.NAME),
//     logoUrl: pg.get('LOGO_URL')
//   }))
// }
