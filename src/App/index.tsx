import * as React from 'react';

interface IAppProps {
  name: string;
}

export class App extends React.Component<IAppProps, any> {

  constructor(props: IAppProps) {
    super(props);
  }

  render() {
    return(
      <div>{this.props.name}</div>
    );
  }
}
