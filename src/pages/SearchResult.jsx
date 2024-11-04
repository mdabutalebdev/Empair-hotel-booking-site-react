import React from "react";
import Header2 from "../components/layouts/Header2";
import Container from "../components/Container";
import SearchCount from "../components/layouts/SearchCount";
import TopFilter from "../components/layouts/TopFilter";
import CradTrending from "../components/CradTrending";
import c1 from "../assets/images/c1.png";
import c2 from "../assets/images/c2.png";
import c3 from "../assets/images/c3.png";
import c4 from "../assets/images/c4.png";
import c5 from "../assets/images/c5.png";
import c6 from "../assets/images/c6.png";
import date from "../assets/icons/Vectordate.svg";
import r1 from "../assets/icons/Stars.png";
import r2 from "../assets/icons/Stars(1).png";
import r3 from "../assets/icons/Stars(2).png";
import r4 from "../assets/icons/Stars(3).png";
import r5 from "../assets/icons/Stars(4).png";
import Label from "../components/Label";
import Image from "../components/Image";
import CheckboxFilter from "../components/CheckboxFilter";
import BestSeller from "../components/layouts/BestSeller";

function SearchResult() {
  // for checkbox
  let fdata = [
    "Child Friendly",
    "Taking extra precautions",
    "Away from the chaos",
    "Epic Challenges",
    "Virtual Experiences",
  ];
  let Durdata = [
    "Upto 1 Hour",
    "1 to 4 Hours",
    "4 Hours to 1 Day",
    "1 to 3 Days",
    "3 Days or More",
  ];
  let Agedata = ["1 & Up", "3 & Up", "7 & Up", "13 & Up", "18 & Up"];
  let Specialdata = [
    "Discounted deals",
    "Free Cancellations",
    "Private Groups",
    "New on Entrada",
    "Entrada Specials",
  ];
  let icon = [
    <Image src={r1} />,
    <Image src={r2} />,
    <Image src={r3} />,
    <Image src={r4} />,
    <Image src={r5} />,
  ];

  return (
    <>
      <Header2 />
      <Container>
        <SearchCount />
        <TopFilter />
        <div className="flex gap-20">
          {/* filter sides */}
          <aside>
            <div className="w-[424px] border p-10 rounded-2xl">
              <Label text={"When are you traveling?"} className={"mb-4"} />
              <div className="flex p-3 w-full justify-between border rounded-xl">
                <input
                  type="datetime"
                  placeholder="Select start date"
                  name="date"
                  className="outline-none w-full placeholder:font-poppins placeholder:text-base placeholder:text-[#99A3AD] text-base text-[#99A3AD] font-poppins"
                  id=""
                />
                <img src={date} alt="date" />
              </div>

              <CheckboxFilter title="Popular tags" data={fdata} />

              <div>
                <Label text="Price Range" />
                <input type="range" name="" id="" />
              </div>
              <CheckboxFilter title={"Duartion"} data={Durdata} />
              <CheckboxFilter title={"Tour Rating"} data={icon} />
              <CheckboxFilter title={"Age Group"} data={Agedata} />
              <CheckboxFilter title={"Specials"} data={Specialdata} />
            </div>
          </aside>
          {/* card sides */}
          <div className="flex flex-wrap gap-10">
            <CradTrending
              cardimg={c1}
              title="Cultural highlights round trip"
              des="Hiking Tour | Stoke on Trent"
              price="$895.00"
              discount="30%"
            />
            <CradTrending
              cardimg={c2}
              title="Cultural highlights round trip"
              des="Cultural Tour | Stoke on Trent"
              price="$895.00"
            />
            <CradTrending
              cardimg={c3}
              title="Cultural highlights round trip"
              des="Hiking Tour | Stoke on Trent"
              price="$895.00"
            />
            <CradTrending
              cardimg={c4}
              title="Cultural highlights round trip"
              des="Cultural Tour | Stoke on Trent"
              price="$895.00"
            />
            <CradTrending
              cardimg={c2}
              title="Cultural highlights round trip"
              des="Hiking Tour | Stoke on Trent"
              price="$895.00"
            />
            <CradTrending
              cardimg={c5}
              title="Cultural highlights round trip"
              des="Cultural Tour | Stoke on Trent"
              price="$895.00"
              discount="30%"
            />
            <CradTrending
              cardimg={c6}
              title="Cultural highlights round trip"
              des="Cultural Tour | Stoke on Trent"
              price="$895.00"
            />
            <CradTrending
              cardimg={c3}
              title="Cultural highlights round trip"
              des="Cultural Tour | Stoke on Trent"
              price="$895.00"
            />
            <CradTrending
              cardimg={c1}
              title="Cultural highlights round trip"
              des="Cultural Tour | Stoke on Trent"
              price="$895.00"
              discount="30%"
            />
            <CradTrending
              cardimg={c4}
              title="Cultural highlights round trip"
              des="Cultural Tour | Stoke on Trent"
              price="$895.00"
            />
          </div>
        </div>
        <BestSeller title='Recently Viewed'/>
      </Container>
    </>
  );
}

export default SearchResult;
