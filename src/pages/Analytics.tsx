import { useEffect, useState } from "react";

import api from "../services/api";

export default function Analytics() {

  const [stats, setStats] = useState<any[]>([]);

  const [teamData, setTeamData] =
    useState<any[]>([]);

  const [bottomCards, setBottomCards] =
    useState<any[]>([]);

  useEffect(() => {

    fetchAnalytics();

  }, []);

  const fetchAnalytics = async () => {

    try {

      const res = await api.get(
        "/analytics"
      );

      setStats(res.data.stats);

      setTeamData(
        res.data.teamData
      );

      setBottomCards(
        res.data.bottomCards
      );

    }

    catch (err) {

      console.log(err);

    }

  };

  return (

    <div className="p-6">

      <div className="max-w-[1120px]">

        <div className="mb-6">

          <h1 className="text-3xl font-bold text-slate-900">

            Analytics

          </h1>

          <p className="text-slate-500 mt-1">

            Performance, conversions and operational throughput.

          </p>

        </div>

        {/* KPI */}

        <div className="grid grid-cols-4 gap-4 mb-5">

          {stats.map((item) => (

            <div

              key={item.title}

              className="bg-white rounded-xl p-4 shadow-sm"

            >

              <p className="text-sm text-slate-500">

                {item.title}

              </p>

              <h2 className="text-2xl font-bold mt-2">

                {item.value}

              </h2>

              <p className="text-green-600 text-sm mt-1">

                {item.change}

              </p>

            </div>

          ))}

        </div>

        {/* Charts */}

        <div className="grid grid-cols-2 gap-4 mb-5">

          {/* Lead Trend */}

          <div className="bg-white rounded-xl p-5 shadow-sm">

            <h3 className="font-semibold text-lg mb-4">

              Lead Trend

            </h3>

            <div className="h-[220px] bg-white rounded-lg">

              <svg
                viewBox="0 0 500 250"
                className="w-full h-full bg-white"
              >

                <line
                  x1="0"
                  y1="50"
                  x2="500"
                  y2="50"
                  stroke="#e5e7eb"
                />

                <line
                  x1="0"
                  y1="110"
                  x2="500"
                  y2="110"
                  stroke="#e5e7eb"
                />

                <line
                  x1="0"
                  y1="170"
                  x2="500"
                  y2="170"
                  stroke="#e5e7eb"
                />

                <polyline
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="3"
                  points="30,170 110,125 190,140 270,75 350,95 430,50"
                />

                <polyline
                  fill="none"
                  stroke="#14b8a6"
                  strokeWidth="3"
                  points="30,220 110,185 190,200 270,160 350,175 430,135"
                />

              </svg>

            </div>

          </div>

          {/* Team */}

          <div className="bg-white rounded-xl p-5 shadow-sm">

            <h3 className="font-semibold text-lg mb-4">

              Team Performance

            </h3>

            <div className="h-[220px] bg-white rounded-lg flex items-end justify-around">

              {teamData.map(

                (item, index) => (

                  <div

                    key={index}

                    className="flex gap-1 items-end"

                  >

                    <div

                      className="w-5 bg-blue-600 rounded-t"

                      style={{

                        height: `${item.leads * 9}px`,

                      }}

                    />

                    <div

                      className="w-5 bg-emerald-500 rounded-t"

                      style={{

                        height: `${item.clients * 9}px`,

                      }}

                    />

                    <div

                      className="w-5 bg-amber-500 rounded-t"

                      style={{

                        height: `${item.sip * 9}px`,

                      }}

                    />

                  </div>

                )

              )}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="grid grid-cols-3 gap-4">

          {bottomCards.map(

            (item, index) => (

              <div

                key={index}

                className="bg-white rounded-xl p-4 shadow-sm"

              >

                <p className="text-sm text-slate-500">

                  {item.title}

                </p>

                <p className="text-2xl font-bold mt-2">

                  {item.value}

                </p>

                <p className="text-green-600 text-sm mt-1">

                  {item.description}

                </p>

              </div>

            )

          )}

        </div>

      </div>

    </div>

  );

}
