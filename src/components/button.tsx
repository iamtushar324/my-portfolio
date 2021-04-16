import styled from 'styled-components';
import { baseColor } from 'styles/base';

export const Button: React.FC<Props> = (props: Props) => {
  return (
    <StyledBtn styleType={props.type}>{props.children}</StyledBtn>
  );
};

const StyledBtn = styled.button<{ styleType?: styleType }>`
  height: 40px;
  width: auto;

  ${(props) =>
    props.styleType === 'pri' &&
    `
        color:${baseColor.onPrimary};
        background-color:${baseColor.primary};
    `}
  ${(props) =>
    props.styleType === 'sec' &&
    `
        color:${baseColor.onSecondary};
        background-color:${baseColor.secondary};
    `}
`;

interface Props {
  type: styleType;
  size: String;
  children: any;
}

type styleType = 'pri' | 'sec' | 'nav';
