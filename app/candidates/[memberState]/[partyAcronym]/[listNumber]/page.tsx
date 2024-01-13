import CandidateHeader from '../../../../components/header/CandidateHeader';

interface CandidatePageProps {
  params: {
    memberState: string,
    partyAcronym: string,
    listNumber: number
  }
}

export default function CandidatePage({ params }: CandidatePageProps) {
  const memberState = params.memberState;
  const { partyAcronym, listNumber } = params;

  return (
    <>
      <CandidateHeader memberState={memberState} partyAcronym={partyAcronym} listNumber={listNumber} />
    </>
  );
}

// export async function generateStaticParams(): Promise<any> {
//   return STATIC_URL_PATH.map(candidate => ({
//     memberState: (candidate.get(SpreadsheetField.MEMBER_STATE) as string).toLowerCase(),
//     partyAcronym: (candidate.get(SpreadsheetField.PARTY_ACRONYM) as string).toLowerCase(),
//     listNumber: (candidate.get(SpreadsheetField.LIST_NUMBER) as number)
//   }));
// }
