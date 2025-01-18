import PriceOption from "../priceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 20,
      duration: "Monthly",
      features: [
        "Access to gym equipment",
        "1 personal training session",
        "Locker facility",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 50,
      duration: "Monthly",
      features: [
        "Access to gym equipment",
        "3 personal training sessions",
        "Locker facility",
        "Group classes",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 100,
      duration: "Monthly",
      features: [
        "Access to gym equipment",
        "Unlimited personal training",
        "Locker facility",
        "Group classes",
        "Access to spa and sauna",
      ],
    },
    {
      id: 4,
      name: "Day Pass",
      price: 10,
      duration: "1 Day",
      features: ["Access to gym equipment"],
    },
    {
      id: 5,
      name: "Annual Plan",
      price: 500,
      duration: "Yearly",
      features: [
        "Access to gym equipment",
        "Unlimited personal training",
        "Locker facility",
        "Group classes",
        "Access to spa and sauna",
        "Exclusive discounts",
      ],
    },
  ];

  return (
    <div className="m-4">
        <h2 className="text-2xl font-bold">Best Prices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
            {
                priceOptions.map((option) => <PriceOption key={option.id} option={option} />)
            }
        </div>
    </div>
);
};

export default PriceOptions;
