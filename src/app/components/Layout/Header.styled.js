import styled from 'styled-components';

const StyledHeader = styled.header`
display: flex;
justify-content: space-around;
grid-row-start: 1;
grid-row-end: 2;
margin: 0 1em;

@media (min-width: 900px) {
    display: flex;
justify-content: space-around;
grid-row-start: 1;
grid-row-end: 2;
}
`;

export default StyledHeader;