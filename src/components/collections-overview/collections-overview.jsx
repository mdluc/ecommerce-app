import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectcollectionsForPreview } from "../../redux/shop/shop-selectors";
import { CollectionOverviewContainer } from "./collections-overview.styles";

const CollectionOverview = ({ collections }) => (
  <CollectionOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectcollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
