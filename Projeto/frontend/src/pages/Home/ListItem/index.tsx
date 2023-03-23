import { ListItemContainer } from './styles'

interface ListItemProps {
  value: number
  type: 'deposit' | 'withdraw'
}

export function ListItem({ value, type }: ListItemProps) {
  const types = {
    deposit: '+',
    withdraw: '-',
  }

  const modifier = types[type] || ''

  return (
    <ListItemContainer>
      <span>{modifier + value}</span>
    </ListItemContainer>
  )
}
