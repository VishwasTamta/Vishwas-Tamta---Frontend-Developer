import React, { useState } from "react";
import styles from "./style";
import { Banner, ContentList, Pagination, Search, NavBar } from "./components";

export interface RocketData {
  id: string;
  name: string;
  type: string;
  active: boolean;
  first_flight: string;
}

const App = () => {
  const [rockets, setrockets] = useState([] as RocketData[]);
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Banner /> <Search rockets={rockets} setrockets={setrockets} />{" "}
          <ContentList
            indexOfFirstRecord={indexOfFirstRecord}
            indexOfLastRecord={indexOfLastRecord}
            recordsPerPage={recordsPerPage}
            rockets={rockets}
            setrockets={setrockets}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
