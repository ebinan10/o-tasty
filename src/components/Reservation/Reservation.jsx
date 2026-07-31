import ReservationForm from "./ReservationForm";
import ReservationInfo from "./ReservationInfo";
import reservationInfo from "./reservationData";

const Reservation = () => {
  return (
    <section className="py-24 w-full flex items-center justify-center  bg-[#0D0D0D] overflow-hidden">
      <div className="max-w-7xl w-[90%] mx-auto px-6 lg:px-10">

        <div className="min-h-[25vh] flex flex-col items-center justify-evenly text-center mb-16">
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Reservation
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Reserve Your Table
          </h2>

          <p className="items-center text-gray-400 mt-6 max-w-3xl mx-auto">
            Enjoy authentic Nigerian cuisine in an elegant atmosphere.
            Reserve your table today and let us make your visit unforgettable.
          </p>
        </div>
        <div className="h-[50px]"></div>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <ReservationForm />
          <ReservationInfo data={reservationInfo} />
        </div>
        <div className="h-[50px]"></div>
      </div>
    </section>
  );
};

export default Reservation;