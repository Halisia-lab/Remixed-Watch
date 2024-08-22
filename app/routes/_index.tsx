import type { V2_MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { CancelButton } from "~/components/mainButtons/CancelButton";
import { NewWatchButton } from "~/components/mainButtons/NewWatchButton";
import { TimeZonesList } from "~/components/watch/TimeZonesList";
import { Watch } from "~/components/watch/Watch";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Watch Exercise" },
  ];
};

export default function Index() {

  const [timeZonesList, setTimeZoneList] = useState([0]);
  const [isDropDownDisplayed, setIsDropDownDisplayed] = useState(false);
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);

  const createWatch = (timeZone: number) => {
    setTimeZoneList(timeZonesList.concat(timeZone));
    setIsDropDownOpened(false);
    setIsDropDownDisplayed(false);
  }

  const hideDropDown = () => {
    setIsDropDownDisplayed(false);
    setIsDropDownOpened(false);
  }

  return (
    <div className="m-4 p-4" >

      {/* Main Button */}
      <div className="flex flex-row "> {isDropDownDisplayed ?
        <CancelButton onPress={hideDropDown} />
        : <NewWatchButton onPress={() => setIsDropDownDisplayed(true)}
        />}
      </div>


      {/* Timezone Dropdown */}
      {isDropDownDisplayed ?
        <TimeZonesList
          onPress={() => setIsDropDownOpened(!isDropDownOpened)}
          isOpen={isDropDownOpened}
          onChooseTimeZone={createWatch} />
        : <></>
      }

      {/* Watches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {timeZonesList.map((timeZone, index) => <Watch timeZone={timeZone} key={index} />)}
      </div>
    </div>
  );
}
