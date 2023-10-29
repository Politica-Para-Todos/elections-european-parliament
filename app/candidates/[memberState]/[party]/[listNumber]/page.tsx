import { STATIC_URL_PATH } from '../../../../google-spreadsheet-client/api';
import { SpreadsheetField } from '../../../../google-spreadsheet-client/spreadhseet-types';

interface CandidatePageProps {
  params: {
    memberState: string,
    partyAcronym: string,
    listNumber: number
  }
}

export default function CandidatePage({ params }: CandidatePageProps) {
  return (
    <>
      <h1>Candidate Header</h1>
      {/* <CandidateHeader /> */}
    </>
  );
}

export async function generateStaticParams(): Promise<any> {
  return STATIC_URL_PATH.map(candidate => ({
    memberState: (candidate.get(SpreadsheetField.MEMBER_STATE) as string).toLowerCase(),
    partyAcronym: (candidate.get(SpreadsheetField.PARTY_ACRONYM) as string).toLowerCase(),
    listNumber: (candidate.get(SpreadsheetField.LIST_NUMBER) as number)
  }));
}
