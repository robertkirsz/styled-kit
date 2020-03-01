import styled from 'styled-components'
import Div from 'components/Div'

export default styled(Div)`
  height: 40px;

  &::before {
    content: 'Small';
    ${({ theme }) => theme.styledKitMediaQueries.medium`content: 'Medium';`}
    ${({ theme }) => theme.styledKitMediaQueries.large`content: 'Large';`}
  }
`
