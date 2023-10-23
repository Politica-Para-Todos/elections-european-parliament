interface MemberStatePageProp {
  params: {
    name: string
  }
}

export default function MemberStatePage({ params }: MemberStatePageProp) {
  const { name } = params;

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export async function generateStaticParams(): Promise<string[]> {
  return await getAllMemberStates();
}

async function getAllMemberStates(): Promise<string[]> {
  return Promise.resolve<string[]>(['member-state-1', 'member-state-2'])
}
