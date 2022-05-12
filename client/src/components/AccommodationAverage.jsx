import { useEffect, useState } from "react";
import "./accommodationAverage.css";
import Rate from "./rate";
import SlideAverageRate from "./SlideAverageRate";
import StarRate from "./starRate";
function AccommodationAverage() {
  const [Average, setAverage] = useState([]);

  const getAverage = () => {
    fetch("http://localhost:3000/reviews/average")
      .then((res) => res.json())
      .then((data) => {
        setAverage(data);
      });
  };

  useEffect(() => {
    getAverage();
    // console.log(Average.aspecsAvg.location);
  }, []);
  return (
    <div class="accommodation">
      <div className="view_accommodation">
        <h1 class="accommodation_title">First Accommodation</h1>
        <div class="accommodation_description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut sint
          quis perferendis unde esse nulla saepe ratione, commodi, nesciunt
          harum assumenda illo quasi adipisci dignissimos, cum sit quaerat
          molestias! Adipisci! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Aut sint quis perferendis unde esse nulla saepe
          ratione, commodi, nesciunt harum assumenda illo quasi adipisci
          dignissimos, cum sit quaerat molestias! Adipisci!
        </div>
      </div>

      <div class="accommodation_data">
        <div class="accommdation_average_rating_title">
          The Average rating for this accommodation{" "}
        </div>
        <div class="accommdation_average_rating">
          <div>
            <Rate
              item={Average.aspecsAvg?.location}
              name="Location"
              maxval="10"
            />
            <StarRate ratevalue={Average.aspecsAvg?.location} />
            <Rate
              item={Average.aspecsAvg?.restaurants}
              name="Restaurants"
              maxval="10"
            />
            <StarRate ratevalue={Average.aspecsAvg?.restaurants} />
          </div>
          <div>
            <Rate
              item={Average.aspecsAvg?.priceQuality}
              name="PriceAuality"
              maxval="10"
            />
            <StarRate ratevalue={Average.aspecsAvg?.priceQuality} />
            <Rate
              item={Average.aspecsAvg?.sanitaryState}
              name="SanitaryState"
              maxval="10"
            />
            <StarRate ratevalue={Average.aspecsAvg?.sanitaryState} />
          </div>
          <div>
            <Rate
              item={Average.aspecsAvg?.childFriendly}
              name="ChildFriendly"
              maxval="10"
            />
            <StarRate ratevalue={Average.aspecsAvg?.childFriendly} />
            <Rate item={Average.aspecsAvg?.pool} name="Pool" maxval="10" />
            <StarRate ratevalue={Average.aspecsAvg?.pool} />
          </div>
        </div>
        <div class="traveled_with_title">
          the percentages of the travelledWith
        </div>
        <div class="accommdation_travelwith_percentages">
          <div>
            <Rate
              item={Average.traveledWithAvg?.FAMILY * 10}
              name="FAMILY"
              maxval="100"
            />
            <SlideAverageRate
              value={Average.traveledWithAvg?.FAMILY * 10}
              maxval="100"
            />
            <Rate
              item={Average.traveledWithAvg?.COUPLE * 10}
              name="COUPLE"
              maxval="100"
            />
            <SlideAverageRate
              value={Average.traveledWithAvg?.COUPLE * 10}
              maxval="100"
            />
          </div>
          <div>
            <Rate
              item={Average.traveledWithAvg?.FRIENDS * 10}
              name="FRIENDS"
              maxval="100"
            />
            <SlideAverageRate
              value={Average.traveledWithAvg?.FRIENDS * 10}
              maxval="100"
            />
            <Rate
              item={Average.traveledWithAvg?.SINGLE * 10}
              name="SINGLE"
              maxval="100"
            />
            <SlideAverageRate
              value={Average.traveledWithAvg?.SINGLE * 10}
              maxval="100"
            />
          </div>
          <div>
            <Rate
              item={Average.traveledWithAvg?.OTHER * 10}
              name="OTHER"
              maxval="100"
            />
            <SlideAverageRate
              value={Average.traveledWithAvg?.OTHER * 10}
              maxval="100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccommodationAverage;
