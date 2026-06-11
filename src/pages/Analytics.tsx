

export default function Analytics() {
  const stats = [
    {
      title: "Conversion rate",
      value: "62%",
      change: "+4% vs last month",
    },
    {
      title: "Avg. response time",
      value: "2h 14m",
      change: "Faster by 18m",
    },
    {
      title: "Active SIPs",
      value: "214",
      change: "+9 this month",
    },
    {
      title: "AUM (₹ Cr)",
      value: "84.6",
      change: "+3.2 this month",
    },
  ];

  const teamData = [
    { leads: 18, clients: 12, sip: 4 },
    { leads: 16, clients: 11, sip: 5 },
    { leads: 14, clients: 10, sip: 6 },
    { leads: 12, clients: 9, sip: 7 },
    { leads: 10, clients: 8, sip: 8 },
  ];

  return (
    <div className="p-6">
      <div className="max-w-[1120px]">
        {/* Header */}

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900">
            Analytics
          </h1>

          <p className="text-slate-500 mt-1">
            Performance, conversions and operational throughput.
          </p>
        </div>

        {/* KPI Cards */}

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

                {[30, 110, 190, 270, 350, 430].map(
                  (x, i) => (
                    <circle
                      key={i}
                      cx={x}
                      cy={[170, 125, 140, 75, 95, 50][i]}
                      r="4"
                      fill="#2563eb"
                    />
                  )
                )}

                {[30, 110, 190, 270, 350, 430].map(
                  (x, i) => (
                    <circle
                      key={i}
                      cx={x}
                      cy={[220, 185, 200, 160, 175, 135][i]}
                      r="4"
                      fill="#14b8a6"
                    />
                  )
                )}
              </svg>
            </div>

            <div className="flex justify-center gap-5 mt-3 text-[12px] text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-4 h-[2px] bg-blue-600"></div>
                <span>Leads</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-4 h-[2px] bg-emerald-500"></div>
                <span>Converted</span>
              </div>
            </div>
          </div>

          {/* Team Performance */}

          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">
              Team Performance
            </h3>

            <div className="h-[220px] bg-white rounded-lg flex items-end justify-around">
              {teamData.map((item, index) => (
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
              ))}
            </div>

            <div className="flex justify-center gap-5 mt-4 text-[12px] text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
                <span>Leads</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-sm"></div>
                <span>Conversions</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-amber-500 rounded-sm"></div>
                <span>Pending</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-slate-500">
              Lead Growth
            </p>

            <p className="text-2xl font-bold mt-2">
              +18%
            </p>

            <p className="text-green-600 text-sm mt-1">
              Compared to previous month
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-slate-500">
              Faster Processing
            </p>

            <p className="text-2xl font-bold mt-2">
              18 min
            </p>

            <p className="text-green-600 text-sm mt-1">
              Improvement in response time
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-sm text-slate-500">
              Revenue Pipeline
            </p>

            <p className="text-2xl font-bold mt-2">
              ₹2.8 Cr
            </p>

            <p className="text-green-600 text-sm mt-1">
              Potential inflow this quarter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
