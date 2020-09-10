import { IC_FACEBOOK, IC_GOOGLE } from '../Icon';
import { Image, Text, View } from 'react-native';
import React, { ReactElement, useState } from 'react';

import { ContainerDeco } from '../../storybook/decorators';
import { DatePicker } from '../../main';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';
import { text } from '@storybook/addon-knobs';

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const Container = styled.View`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: column;
`;

function Default(): React.ReactElement {
  const [facebookLoading, setFacebookLoading] = useState<boolean>(false);
  const [googleLoading, setGoogleLoading] = useState<boolean>(false);

  return (
    <ScrollContainer>
      <Container>
        <DatePicker />
      </Container>
    </ScrollContainer>
  );
}

function DatePickerWeekday(): React.ReactElement {
  return (
    <ScrollContainer>
      <Container>
        <DatePicker label={''} />
      </Container>
      <Container>
        <DatePicker weekdayFormat={'short'} label={'Short weekday format'} />
      </Container>
      <Container>
        <DatePicker weekdayFormat={'narrow'} label={'Narrow weekday format'} />
      </Container>
    </ScrollContainer>
  );
}
function DatePickerYearMonth(): React.ReactElement {
  return (
    <ScrollContainer>
      <Container>
        <DatePicker
          yearMonthComponent={(monthFirstDate): React.ReactElement => {
            return (
              <View
                style={{
                  width: '100%',
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#efefef',
                  marginBottom: 10,
                }}>
                <Text>{`${monthFirstDate.toLocaleString('default', {
                  month: 'long',
                })}`}</Text>
                <Text
                  style={{
                    fontSize: 10,
                  }}>{`${monthFirstDate.getFullYear()}`}</Text>
              </View>
            );
          }}
        />
      </Container>
      <Container>
        <DatePicker
          yearMonthComponent={(monthFirstDate): React.ReactElement => {
            return (
              <View
                style={{
                  width: '100%',
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#efefef',
                  marginBottom: 10,
                }}>
                <Text>{`${monthFirstDate.toLocaleString('default', {
                  year: 'numeric',
                  month: 'long',
                })}`}</Text>
              </View>
            );
          }}
        />
      </Container>
    </ScrollContainer>
  );
}
/**
 * Below are stories for web
 */
export default {
  title: 'DatePicker',
};

export const toStorybook1 = (): ReactElement => <Default />;
export const toStorybook2 = (): ReactElement => <DatePickerWeekday />;
export const toStorybook3 = (): ReactElement => <DatePickerYearMonth />;
toStorybook1.story = {
  name: 'default',
};
toStorybook2.story = {
  name: 'weekday format',
};
toStorybook3.story = {
  name: 'custom year/month',
};
/**
 * Below are stories for app
 */
storiesOf('DatePicker', module)
  .addDecorator(ContainerDeco)
  .add('default', () => (
    <>
      <Default />
    </>
  ))
  .add('weekday format', () => <DatePickerWeekday />, {
    notes: 'Datapicker Input',
  })
  .add('custom year/month', () => <DatePickerYearMonth />, {
    notes: 'Datapicker Input',
  });
