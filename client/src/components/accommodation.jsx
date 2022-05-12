import FlagEmoji from "../utils/flagEmoji";
import "./accommodation.css";
import Rate from "./rate";
import StarRate from "./starRate";
function Accommodation({ AllAccommodations }) {
  //   console.log(AllAccommodations.length);
  return (
    <div className="accommodation">
      {AllAccommodations?.map((item, i) => {
        return (
          <div className="accommodation_detials">
            <div className="view_accommodation_details">
              <div className="accommodation_main_details">
                <div className="accommodation_user_data" key={i}>
                  Added By <span> {item.user} </span> {item.locale}
                  {/* <FlagEmoji countryCode={item.locale} /> */}
                  On{" "}
                  <span>{new Date(item.entryDate).toLocaleDateString()}</span>
                </div>

                <div>
                  <div className="Accomodation_title">
                    {item.titles[Object.keys(item.titles)[0]]
                      ? Object.values(item.titles)[0]
                      : ""}
                  </div>
                  <div className="accommodation_content">
                    {item.texts[Object.keys(item.texts)[0]]
                      ? item.texts[Object.keys(item.texts)[0]]
                      : ""}
                  </div>
                </div>
              </div>
              <div>
                <Rate
                  name="Gerenal"
                  item={Object.values(item.ratings.general)[0]}
                  maxval="10"
                />

                <StarRate ratevalue={Object.values(item.ratings.general)[0]} />
                <div className="about_trip">
                  <div className="about_trip__title"> About the trip </div>
                  <div>
                    date:
                    <span className="travel_date">
                      {new Date(item.travelDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div>
                    with:{" "}
                    <span className="travel_with">{item.traveledWith}</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div className="accommodation_location_with_date"></div>
              <div className="rating_aspects_title">Ratings of aspects:</div>
              <div className="Rate_values">
                <div>
                  <Rate
                    name="Location"
                    item={Object.values(item.ratings.aspects)[0]}
                    maxval="10"
                  />
                  <StarRate
                    ratevalue={Object.values(item.ratings.aspects)[0]}
                  />
                  <Rate
                    name="pool"
                    item={Object.values(item.ratings.aspects)[22]}
                    maxval="10"
                  />
                  <StarRate
                    ratevalue={Object.values(item.ratings.aspects)[22]}
                  />
                </div>

                <div>
                  {" "}
                  <Rate
                    name="PriceQuality"
                    item={Object.values(item.ratings.aspects)[2]}
                    maxval="10"
                  />
                  <StarRate
                    ratevalue={Object.values(item.ratings.aspects)[2]}
                  />
                </div>

                <div>
                  <Rate
                    name="ChildFriendly"
                    item={Object.values(item.ratings.aspects)[5]}
                    maxval="10"
                  />
                  <StarRate
                    ratevalue={Object.values(item.ratings.aspects)[5]}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Accommodation;
