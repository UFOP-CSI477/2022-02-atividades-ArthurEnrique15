import {
  DateContainer,
  DescriptionContainer,
  ListItemContainer,
  ValueContainer,
} from './styles'

interface ListItemProps {
  value: number
  type: 'deposit' | 'withdraw'
  description: string
  date: string
}

export function ListItem({ value, type, description, date }: ListItemProps) {
  const types = {
    deposit: '+',
    withdraw: '-',
  }

  const modifier = types[type] || ''

  const formattedDate = new Date(date).toLocaleDateString('pt-BR')

  return (
    <ListItemContainer>
      <DateContainer>
        <span>{formattedDate}</span>
      </DateContainer>
      <ValueContainer>
        <span>{modifier + 'R$ ' + value}</span>
      </ValueContainer>
      <DescriptionContainer>
        <span>{description}</span>
      </DescriptionContainer>
    </ListItemContainer>
  )
}
