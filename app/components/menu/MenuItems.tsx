import MenuItem from 'antd/es/menu/MenuItem';
import Link from 'next/link';

export default function MenuItems() {
  return (
    <>
      <MenuItem key={1}>
        <Link href='/member-states'>
          Member States
        </Link>
      </MenuItem>
      <MenuItem key={2}>
        <Link href='/parties'>
          Parties
        </Link>
      </MenuItem>
      <MenuItem key={3}>
        <Link href='/candidates'>
          Candidates
        </Link>
      </MenuItem>
      <MenuItem key={4}>
        <Link href='/about-us'>
          About us
        </Link>
      </MenuItem>
    </>
  )
}
