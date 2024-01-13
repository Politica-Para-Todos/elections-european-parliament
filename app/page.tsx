import { ConfigProvider } from 'antd';
import { Content } from 'antd/es/layout/layout';
import HomePoliticalGroups from './components/political-group/PoliticalGroup';

export default function HomePage() {
  return (
    <ConfigProvider>
      <Content>
        <HomePoliticalGroups />
      </Content>
    </ConfigProvider>
  )
}
