
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats() {
  const stats = [
    { label: "Happy Clients", value: 200 },
    { label: "Project Completed", value: 270 },
    { label: "Years Experience", value: 12 },
    { label: "Upwork Hours", value: 50000 },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.3,     // percentage of component visible before triggering
  });

  return (
    <div
      ref={ref}
      className=" max-w-5xl flex items-center justify-center mx-auto  shadow"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 py-10 gap-4 px-4">
        {stats.map((stat, index) => {
          const isLast = index === stats.length - 1;
          const isSecondInSmall = index === 1;
          const borderClass =
            !isLast && !isSecondInSmall
              ? "border-r-2 border-gray-700 md:pr-10"
              : isSecondInSmall
                ? "md:border-r-2 md:border-gray-700 md:pr-10"
                : "";

          return (
            <div key={index} className="text-center">
              <div
                className={`flex flex-col items-center gap-2 ${borderClass}`}
              >
                <p className="text-3xl md:text-4xl font-bold text-[#EF6C00]">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                    />
                  ) : (
                    0
                  )}
                  {stat.suffix || ""}+
                </p>
                <p className="md:text-lg text-gray-300">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
