import { PoliticalGroupEnumUrl } from '../../political-groups/[acronym]/political-group-dto';

interface PartiesListProps {
  politicalGroupAcronym: PoliticalGroupEnumUrl;
}

export default async function PartiesList({ politicalGroupAcronym }: PartiesListProps) {
  // const parties = await getPartiesByPoliticalGroup(politicalGroupAcronym);

  return (<div>LOL</div>)
  // return (
  //   <section className='party-candidates'>
  //     <Row>
  //       <Col lg={17} span={24}>
  //         {/* eslint-disable-next-line react/no-unescaped-entities */}
  //         <Title level={2}>Parties List</Title>
  //       </Col>
  //       <Col lg={24} span={24}>
  //         <Paragraph>
  //           Click on each image to access the party page.
  //         </Paragraph>
  //       </Col>
  //     </Row>
  //     <Row typeof='flex' className='party-candidates__list'>
  //       <PartiesAvatars parties={parties} />
  //     </Row>
  //   </section >
  // );
};

// export async function getPartiesByPoliticalGroup(acronym: PoliticalGroupEnumUrl): Promise<Party[]> {
//   const spreadhseet = await getSpreadsheet(process.env.COMMON_DATA_SPREADHSEET_ID ?? '');
//   const partiesSheet = await spreadhseet.sheetsByIndex[1].getRows();

//   const parties = partiesSheet.filter(p => {
//     const sheetAcronym = (p.get(SpreadsheetField.POLITICAL_GROUP_ACRONYM) as PoliticalGroupEnum);

//     return convertPoliticalGroupAcronymToUrl(sheetAcronym) === acronym;
//   })

//   return parties.map((p, index) => ({
//     id: index,
//     name: p.get(SpreadsheetField.NAME),
//     acronym: p.get(SpreadsheetField.ACRONYM),
//     logoUrl: p.get(SpreadsheetField.LOGO_URL),
//     website: p.get(SpreadsheetField.WEBSITE),
//     description: p.get(SpreadsheetField.DESCRIPTION),
//     memberState: p.get(SpreadsheetField.MEMBER_STATE) as MemberState,
//     politicalGroupAcronym: p.get(SpreadsheetField.POLITICAL_GROUP_ACRONYM) as PoliticalGroupEnum
//   }))
// }
