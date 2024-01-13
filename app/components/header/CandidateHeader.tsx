import { MemberState } from '@prisma/client';

interface CandidateHeaderProps {
  memberState: string,
  partyAcronym: string,
  listNumber: number
}

export default async function CandidateHeader({ memberState, partyAcronym, listNumber }: CandidateHeaderProps) {
  // const candidate: Candidate = await getCandidate(memberState, partyAcronym, listNumber);
  // const { bio, shortName, fullName, photoUrl } = candidate;

  return (<div>LOL</div>)
  // return (
  //   <section className='party-header'>
  //     <Row>
  //       <Col span={24}>
  //         <h1 className='party-header-title'>{fullName}</h1>
  //         {shortName && (
  //           <Fragment>
  //             <Divider />
  //             <p className='party-header-subtitle'>{shortName}</p>
  //           </Fragment>
  //         )}
  //       </Col>
  //     </Row>
  //     <Row typeof='flex' justify='center'>
  //       <Col>
  //         <Avatar size={200} src={photoUrl.toString()} icon={<UserOutlined />} />
  //         {!bio && (
  //           <div className='party-header__program-cta'>
  //             <p>
  //               No bio.
  //             </p>
  //           </div>
  //         )}
  //       </Col>
  //     </Row>
  //     <Row
  //       typeof='flex'
  //       justify='end'
  //       align='middle'
  //       className='party-header__social'
  //     >
  //       <SocialSharing theme={'#c4c4c4'} />
  //     </Row>
  //   </section>
  // );
};

// export async function getCandidate(memberState: MemberState, partyAcronym: string, listNumber: number): Promise<Candidate> {
//   // TODO: get spreadsheet id based on member state
//   // const spreadsheetId = await getSpreadsheetIdByMemberState(memberState);
//   const spreadhseet = await getSpreadsheet(process.env.COMMON_DATA_SPREADHSEET_ID ?? 'spreadsheetId');
//   const candidates = await spreadhseet.sheetsByIndex[2].getRows();

//   const candidate = candidates.filter(candidate =>
//     candidate.get(SpreadsheetField.PARTY_ACRONYM) === partyAcronym.toUpperCase() &&
//     (candidate.get(SpreadsheetField.LIST_NUMBER) as number) === listNumber
//   )[0];

//   return {
//     listNumber: candidate.get(SpreadsheetField.LIST_NUMBER),
//     shortName: candidate.get(SpreadsheetField.SHORT_NAME),
//     fullName: candidate.get(SpreadsheetField.FULL_NAME),
//     bio: candidate.get(SpreadsheetField.BIO),
//     photoUrl: candidate.get(SpreadsheetField.PHOTO_URL),
//     memberState: candidate.get(SpreadsheetField.MEMBER_STATE),
//     partyAcronym: candidate.get(SpreadsheetField.PARTY_ACRONYM)
//   };
// }

export interface Candidate {
  listNumber: number,
  shortName: string,
  fullName: string,
  photoUrl: string,
  bio: string,
  memberState: MemberState,
  partyAcronym: string
}
