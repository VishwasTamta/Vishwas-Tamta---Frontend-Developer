import React from "react";
import styles from "./style";
import { Banner, ContentList, Pagination, Search, NavBar } from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Banner /> <Search /> <ContentList /> <Pagination />
        </div>
      </div>
    </div>
  );
};

export default App;
