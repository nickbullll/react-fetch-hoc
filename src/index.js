import React from 'react';

const fetchData = get => WrappedComponent =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fetchedData: {},
        fetchedError: {}
      };
    }

    componentDidMount() {
      get(this.props)
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then(fetchedData => this.setState({ fetchedData }))
        .catch((e) => {
          this.setState({ fetchedError: e });
        });
    }

    render() {
      const { fetchedData, fetchedError } = this.state;
      return <WrappedComponent {...this.props} {...fetchedData} fetchedError={fetchedError} />
    }
  }

export default fetchData;
