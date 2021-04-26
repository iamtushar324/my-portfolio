import { Skill } from 'components';
import styled from 'styled-components';
import { baseColor, baseStyle } from 'styles/base';
import React from 'assets/react-icon.png';
import Node from 'assets/node.png';
import Docker from 'assets/docker.png';
import Antd from 'assets/antd.svg';
import Cpp from 'assets/c++.png';
import MySql from 'assets/mysql.png';
import MongoDb from 'assets/mongodb.png';

export default function Skills() {
  return (
    <MainWrapper>
      <Heading>Skills</Heading>
      <SkillWrapper>
        <Skill name={'React Js'} icon={React} />
        <Skill name={'Node Js'} icon={Node} />
        <Skill name={'Docker'} icon={Docker} />
        <Skill name={'Ant Design'} icon={Antd} />
        <Skill name={'C++'} icon={Cpp} />
        <Skill name={'MySql'} icon={MySql} />
        <Skill name={'Mongo DB'} icon={MongoDb} />
      </SkillWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  border-bottom: 1px solid ${baseColor.surface};
  padding-bottom: 40px;
`;
const Heading = styled.h1`
  font-size: ${baseStyle.mainHeadingFont};
  color: ${baseColor.onBackground};
  margin: 60px 0px;
`;

const SkillWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
