import React from "react";
import CollectionPage from "../collection/collection";
import CollectionOverview from "../../components/collections-overview/collections-overview";
import { Route } from "react-router-dom";

const ShopPage = ({ match }) => (
  <>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </>
);

export default ShopPage;
