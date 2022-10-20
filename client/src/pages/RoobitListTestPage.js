import { RoobitsList } from '../components/RoobitsList';
import styled from 'styled-components';

const EmptyPage = styled.div`
  display: flex;
  justify-content: end;
`;

export const RoobitListTestPage = () => {
  return (
    <EmptyPage>
      <RoobitsList />
    </EmptyPage>
  );
};
