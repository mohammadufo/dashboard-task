import { styled } from 'styled-components'

import LogoIcon from '../assets/icons/so-wallet-coin.png'
import DashIcon from '../assets/icons/dashboard.png'
import InvoicesIcon from '../assets/icons/invoices.png'
import WalletIcon from '../assets/icons/wallet.png'
import ReportIcon from '../assets/icons/chart.png'
import TransactionIcon from '../assets/icons/transfer.png'
import SettingIcon from '../assets/icons/settings.png'
import HelpIcon from '../assets/icons/help.png'
import BackIcon from '../assets/icons/back.png'

const Container = styled.div`
  width: 256px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 0px 26px 26px 0px;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  padding: 25px;
`
const Main = styled.div``
const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 16px;
  font-weight: 800;
  font-size: 17px;
  color: ${({ theme }) => theme.disabledText};
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`
const LogoSpan = styled.span`
  color: ${({ theme }) => theme.primary};
`

const Image = styled.img`
  width: 22.5px;
  height: 20.25px;
  object-fit: contain;
`
const LogoText = styled.span`
  font-weight: 900;
  font-size: 21px;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 22px;
`

const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 14px 28px;
  gap: 16px;
  font-weight: 800;
  font-size: 17px;
  color: ${({ theme, active }) =>
    active === 'yes' ? theme.primary : theme.secondaryText};
  background-color: ${({ theme, active }) => active === 'yes' && theme.bgSoft};
  border-radius: 6px;
`
const Span = styled.span``

const Sidebar = () => {
  return (
    <Container>
      <Top>
        <Logo>
          <Image alt="" src={LogoIcon} />
          <LogoText>
            Fin<LogoSpan>app</LogoSpan>
          </LogoText>
        </Logo>
      </Top>
      <Main>
        <List>
          <ListItem active="yes">
            <Image src={DashIcon} />
            <Span>Dashboard</Span>
          </ListItem>
          <ListItem>
            <Image src={InvoicesIcon} />
            <Span>Invoice</Span>
          </ListItem>
          <ListItem>
            <Image src={WalletIcon} />
            <Span>Wallet</Span>
          </ListItem>
          <ListItem>
            <Image src={ReportIcon} />
            <Span>Reports</Span>
          </ListItem>
          <ListItem>
            <Image src={TransactionIcon} />
            <Span>Transactions</Span>
          </ListItem>
          <ListItem>
            <Image src={SettingIcon} />
            <Span>Settings</Span>
          </ListItem>
          <ListItem>
            <Image src={HelpIcon} />
            <Span>Help</Span>
          </ListItem>
        </List>
      </Main>
      <Footer>
        <Image src={BackIcon} />
        <Span>Logout</Span>
      </Footer>
    </Container>
  )
}

export default Sidebar
