import { PoliticalGroupEnumUrl } from '../../political-groups/[acronym]/political-group-dto';

interface ProfileHeaderProps {
  politicalGroupAcronym: PoliticalGroupEnumUrl,
  subtitle: string
}

export default async function ProfileHeader({ politicalGroupAcronym, subtitle }: ProfileHeaderProps) {
  // const politicalGroup = await getPoliticalGroupBy(politicalGroupAcronym);

  return (<div>LOL</div>)

  // if (!politicalGroup) {
  //   return null;
  // }

  // const { acronym, name, logoUrl } = politicalGroup;
  // const hasManifesto = false;
  // const website = 'www';

  // return (
  //   <section className='party-header'>
  //     <Row>
  //       <Col span={24}>
  //         <h1 className='party-header-title'>{name}</h1>
  //         {acronym && (
  //           <Fragment>
  //             <Divider />
  //             <p className='party-header-subtitle'>{subtitle}</p>
  //           </Fragment>
  //         )}
  //       </Col>
  //     </Row>
  //     <Row typeof='flex' justify='center'>
  //       <Col>
  //         <Avatar size={200} src={logoUrl} icon={<UserOutlined />} shape='square' />
  //         <div className='party-header__program-cta'>
  //           {hasManifesto && (
  //             <Button
  //               className='button--grey party-header__program-button'
  //               key={name}
  //             >
  //               <Link href={`/party/${acronym}/manifesto`} rel='noopener'>
  //                 {`Ver Programa ${acronym}`}
  //               </Link>
  //             </Button>
  //           )}
  //         </div>
  //         {!hasManifesto && (
  //           <div className='party-header__program-cta'>
  //             <p>
  //               Este partido ainda não apresentou programa eleitoral. <br />
  //               Para qualquer correção entra em contacto connosco via{' '}
  //               <a href='mailto:contacto@politicaparatodos.pt'>e-mail.</a>
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
  //       <a href={website} rel='noopener noreferrer' target='_blank'>
  //         {website}
  //       </a>
  //       <SocialSharing theme={'#c4c4c4'} />
  //     </Row>
  //   </section>
  // );
};

// async function getPoliticalGroupBy(acronym: PoliticalGroupEnumUrl): Promise<PoliticalGroup | null> {
//   const spreadhseet = await getSpreadsheet(process.env.COMMON_DATA_SPREADHSEET_ID ?? '');
//   const politicalGroupSheet = await spreadhseet.sheetsByIndex[0].getRows();

//   const politicalGroup = politicalGroupSheet.filter(pg => {
//     const sheetAcronym = pg.get(SpreadsheetField.ACRONYM) as PoliticalGroupEnum;
//     return convertPoliticalGroupAcronymToUrl(sheetAcronym) === acronym;
//   })

//   if (!politicalGroup[0]) {
//     return null;
//   }

//   return {
//     id: 1,
//     acronym: politicalGroup[0].get(SpreadsheetField.ACRONYM),
//     name: politicalGroup[0].get(SpreadsheetField.NAME),
//     logoUrl: politicalGroup[0].get(SpreadsheetField.LOGO_URL)
//   }
// }
