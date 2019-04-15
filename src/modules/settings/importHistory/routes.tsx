import asyncComponent from 'modules/common/components/AsyncComponent';
import queryString from 'query-string';
import * as React from 'react';
import { Route } from 'react-router-dom';

const Histories = asyncComponent(() =>
  import(/* webpackChunkName: "Settings Histories" */ './containers/Histories')
);

const HistoryDetail = asyncComponent(() =>
  import(/* webpackChunkName: "Settings Histories" */ './containers/HistoryDetail')
);

const importHistories = ({ location }) => {
  const queryParams = queryString.parse(location.search);

  return <Histories queryParams={queryParams} />;
};

const importHistoryDetail = ({ location }) => {
  const queryParams = queryString.parse(location.search);
  const id = queryParams.id;

  return <HistoryDetail id={id} />;
};

const routes = () => (
  <React.Fragment>
    <Route path="/settings/importHistories/" component={importHistories} />
    <Route path="/settings/importHistory/:id" component={importHistoryDetail} />
  </React.Fragment>
);

export default routes;
