
interface CandidatesAvatarsProps {
  memberState: string
  partyAcronym: string
}

export default async function CandidatesAvatars({ memberState, partyAcronym }: CandidatesAvatarsProps) {
  const acronym = decodeURIComponent(partyAcronym); // convert from url to party acronym
  // const candidates = await getCandidatesByParty(acronym, memberState);

  return (<div>LOL</div>)
  //   <>
  // {
  //   candidates.map((candidate, index) => {
  //     const { listNumber, shortName, photoUrl } = candidate;

  //     return (
  //       <Col
  //         key={index}
  //         span={12}
  //         sm={8}
  //         lg={6}
  //         xl={4}
  //         className='party-candidate'
  //       >
  //         <Link
  //           className='avatar-list-item'
  //           href={`/candidates/${memberState}/${partyAcronym}/${listNumber}`}
  //           legacyBehavior={false}
  //         >
  //           <div className='party-candidate__content'>
  //             <Avatar
  //               size={120}
  //               icon={<UserOutlined />}
  //               src={photoUrl.toString()}
  //             />
  //             {shortName && (
  //               <>
  //                 <Title
  //                   className='party-candidate__content-title'
  //                   level={3}
  //                 >
  //                   {shortName}
  //                 </Title>
  //                 {/* Flag - Member State */}
  //               </>
  //             )}
  //           </div>
  //         </Link>
  //       </Col>
  //     )
  //   })
  // }
  //   </>
}

// export async function getCandidatesByParty(acronym: string, memberState: MemberState): Promise<Candidate[]> {
//   const spreadhseet = await getSpreadsheet(process.env.COMMON_DATA_SPREADHSEET_ID ?? '');
//   const candidatesSheet = await spreadhseet.sheetsByIndex[2].getRows();

//   return candidatesSheet
//     .filter(c => {
//       const partyAcronym = c.get(SpreadsheetField.PARTY_ACRONYM) as string
//       return convertPartyAcronymToUrl(partyAcronym) === acronym
//     })
//     .map((c, index) => ({
//       id: index,
//       listNumber: c.get(SpreadsheetField.LIST_NUMBER) as number,
//       shortName: c.get(SpreadsheetField.SHORT_NAME),
//       fullName: c.get(SpreadsheetField.FULL_NAME),
//       bio: '',
//       photoUrl: new URL(c.get(SpreadsheetField.PHOTO_URL)),
//       memberState: c.get(SpreadsheetField.MEMBER_STATE) as MemberState,
//       partyAcronym: c.get(SpreadsheetField.PARTY_ACRONYM)
//     }))
// }
