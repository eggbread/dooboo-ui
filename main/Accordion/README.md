# Accordion

> Simple drop down item component for react-native. This component supports drop down toggle with animation.<br/>

![image](https://user-images.githubusercontent.com/58724686/87262058-81ae4400-c4f3-11ea-8c56-216c101ef218.gif)

## Props

|                      | necessary | types                  | default               |
| -------------------- | --------- | ---------------------- | ----------------------|
| data                 | ✓         | array                  | `Default Data`        |
| isAnimated           |           | boolean                | `true`                |
| collapseOnStart      | ✓         | boolean                | `false`               |
| animDuration         |           | number                 | `300`                 |
| activeOpacity        |           | number                 | `1`                   |
| toggleElement        |           | React.ReactElement     | `default arrow image` |
| accordionItemStyle   |           | ViewStyle              | ``                    |
| titleStyle           |           | ViewStyle              | ``                    |
| bodyStyle            |           | ViewStyle              | ``                    |

## Installation

```sh
yarn add dooboo-ui
```

## Usage
```javascript
import { Accordion } from 'dooboo-ui';

const Default = (): React.ReactElement => {
  const data = [
    {
      title: {
        name: <StyledTitle>Defualt-title-01</StyledTitle>,
      },
      bodies: [
        {
          name: <StyledItem>Default body01</StyledItem>,
        },
        {
          name: <StyledItem>Default body02</StyledItem>,
        },
      ],
    },
    {
      title: {
        name: <StyledTitle>Defualt-title-02</StyledTitle>,
      },
      bodies: [
        {
          name: <StyledItem>Default body01</StyledItem>,
        },
        {
          name: <StyledItem>Default body02</StyledItem>,
        },
      ],
    },
    {
      title: {
        name: <StyledTitle>Defualt-title-03</StyledTitle>,
      },
      bodies: [
        {
          name: <StyledItem>Default body01</StyledItem>,
        },
        {
          name: <StyledItem>Default body02</StyledItem>,
        },
      ],
    },
  ];

  return (
    <Container>
      <Accordion
        data={data}
        isAnimated={true}
        collapseOnStart={true}
        animDuration={400}
        activeOpacity={1}
        toggleElement={<Arrow />}
      />
    </Container>
  );
};
```
