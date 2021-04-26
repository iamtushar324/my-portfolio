import styled from 'styled-components';
import { baseColor } from 'styles/base';

export const Button: React.FC<Props> = (props: Props) => {
  return (
    <StyledBtn
      cStyles={props.cStyles}
      styleType={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </StyledBtn>
  );
};

const StyledBtn = styled.button<{
  cStyles?: any;
  styleType?: styleType;
  onClick?: any;
}>`
  height: 40px;
  width: auto;
  cursor: pointer;

  ${(props) =>
    props.styleType === 'pri' &&
    `
        color:${baseColor.onPrimary};
        background-color:${baseColor.primary};
        border:1px solid ${baseColor.onBackground};
    `}
  ${(props) =>
    props.styleType === 'sec' &&
    `
        color:${baseColor.onSecondary};
        background-color:${baseColor.secondary};
    `}
  ${(props) =>
    props.styleType === 'nav' &&
    `
        color:${baseColor.onBackground};
        background-color:transparent;
        border:1px solid ${baseColor.onBackground};

    `}
    ${(props) =>
    props.disabled && `     text-decoration:line-through;`}

    ${(props) => props.cStyles}
`;

interface Props {
  type: styleType;
  size: String;
  children: any;
  cStyles?: String;
  onClick?: any;
  disabled?: any;
}

type styleType = 'pri' | 'sec' | 'nav';
