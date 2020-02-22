import React, { Component } from 'react';
import { render } from '@testing-library/react';

import { withQrCode } from '../src';

describe('withQrCode usage with functional component', () => {
  const FunctionalComponent = () => {
    return <></>;
  };

  const FunctionalComponentHOC = withQrCode(FunctionalComponent);

  it('should', () => {
    const { container } = render(<FunctionalComponentHOC />);

    expect(container).toBe(null);
  });
});

describe('withQrCode usage with class component', () => {
  class ClassComponent extends Component<any> {
    render() {
      const {} = this.props;

      return <></>;
    }
  }

  const ClassComponentHOC = withQrCode(ClassComponent);

  it('should', () => {
    const { container } = render(<ClassComponentHOC />);

    expect(container).toBe(null);
  });
});
