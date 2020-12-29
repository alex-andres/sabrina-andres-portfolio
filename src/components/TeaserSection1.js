import React from "react";
import TeaserSmall from "./TeaserSmall";
import TeaserLarge1 from "./TeaserLarge1";
export default () => {
  return (
    <div>
      <TeaserLarge1 className={"first-large"} />
      <TeaserSmall className={"first-small"} />
    </div>
  );
};
