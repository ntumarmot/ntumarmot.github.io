export const projectStatsEn = [
  { value: "About 1,200", label: "schedulable work orders", note: "Each includes quantity, due date, and routing requirements" },
  { value: "About 180M", label: "units of demand", note: "The schedule must handle high volume across multiple periods" },
  { value: "4,000+", label: "material nodes", note: "Raw materials, work in progress, and finished goods are connected" },
  { value: "About 230 days", label: "planning horizon", note: "Today's decisions affect future material supply and due dates" },
];

export const contributionStatsEn = [
  { value: "39", label: "direct content commits", note: "The first confirmed record is dated Apr. 19, 2026" },
  { value: "132", label: "distinct file paths", note: "Code, tests, data, and documentation" },
  { value: "25", label: "Python-related commits", note: "Validation, preprocessing, and machine allocation" },
  { value: "19", label: "documentation commits", note: "Data definitions, methods, and operating instructions" },
];

export const contributionTimelineEn = [
  { month: "2026 / 04", title: "Built the validation foundation for single-station scheduling", description: "Added feasibility checks, visualizations, and unit tests for inventory, machine capacity, overtime, backlog, and setup constraints." },
  { month: "2026 / 07", title: "Converted product specifications into setup times", description: "Estimated preparation time from changes in wire diameter, head type, and length, then exported it as scheduling parameter C_S." },
  { month: "2026 / 08", title: "Built processing-time and capacity calibration tools", description: "Derived processing time C_P and available station hours U from machine capability, compatibility, and production rates, then tested optimistic and conservative estimates with a lambda weight." },
  { month: "2026 / 09", title: "Completed the machine-allocation MVP", description: "Used HiGHS to assign factory-level production targets to actual machines and report completed quantities, shortages, utilization, and overtime needs." },
  { month: "2026 / 10", title: "Integrated objective weights, company work orders, and presentation material", description: "Balanced shortages, overtime, utilization, and setups; reconciled old orders with new work orders, product specifications, and scrap rates; and completed supporting documentation." },
];

export const contributionsEn = [
  {
    number: "01",
    title: "Built single-station schedule validation and test tools",
    subtitle: "Answering: can this schedule actually be executed?",
    problem: "A solver output is not automatically a valid schedule. Negative inventory, excessive machine hours, or an assignment to an incompatible machine would still fail on the shop floor.",
    work: "I built a feasibility verifier that checks inventory balance, station and machine capacity, specification compatibility, setup time, overtime, unfinished quantities, and variable bounds. I also added unit tests and charts so later code changes can be checked against existing behavior.",
    value: "Instead of returning only numbers, the system identifies the constraint, date, or machine responsible for a problem. The team can then distinguish an algorithm issue from a data or capacity-setting issue.",
    example: "If a machine has eight available hours but receives 9.5 hours of work, the verifier reports the 1.5-hour excess instead of treating the result as executable.",
  },
  {
    number: "02",
    title: "Converted raw company data into scheduling parameters",
    subtitle: "Turning Excel specifications and rates into values a model can calculate",
    problem: "The company provides work orders, product specifications, machine ranges, and rates per minute. The scheduling model needs explicit processing time, setup time, and capacity, so the source files cannot go directly into a solver.",
    work: "I organized wire diameter, head type, length, machine capability, and processing rates to derive C_S for setup time, C_P for unit processing time, and U for total station hours in each period.",
    value: "Scheduling parameters are tied to company equipment and production rates rather than arbitrary assumptions, with a repeatable path from source data to model input.",
    example: "The system excludes a machine that cannot handle a given diameter and adds preparation time when switching between products with very different specifications.",
  },
  {
    number: "03",
    title: "Implemented machine allocation within a station",
    subtitle: "Turning station-level targets into tasks for individual machines",
    problem: "A factory schedule says what each station should produce, but not which machine should do it. Total hours may look sufficient even when machine-specific constraints make the target impossible.",
    work: "I built a HiGHS-based allocation tool that considers compatibility, available hours, processing time, setup time, and overtime limits. It reports tasks, completed and unassigned quantities, machine utilization, and reasons for shortfalls.",
    value: "The abstract factory plan becomes closer to an executable machine plan, while also revealing when factory-level scheduling overestimates a station's ability.",
    example: "For a 30,000-unit target, the tool calculates what M1, M2, and M3 can accept. If only 28,000 fit, it preserves and explains the 2,000-unit gap.",
  },
  {
    number: "04",
    title: "Calibrated processing times and realistic capacity",
    subtitle: "Avoiding plans that work only at theoretical speed",
    problem: "Published machine rates are close to ideal conditions. Actual output also depends on order mix, setups, and compatible equipment, so optimistic rates can make the model overestimate factory capacity.",
    work: "I built conservative processing-time estimates, real-capacity calculations, and backtesting tools. A lambda weight controls the position between optimistic and conservative estimates, supported by comparison charts and documentation.",
    value: "The team can see how capacity assumptions change the schedule and choose a level of conservatism that better matches operations.",
    example: "If the theoretical rate is 100 units per hour but a conservative estimate is 80, lambda can move the adopted value toward either endpoint or somewhere between them.",
  },
  {
    number: "05",
    title: "Designed trade-offs for machine allocation",
    subtitle: "Letting the system favor fewer shortages, less overtime, or a more balanced load",
    problem: "There is rarely one perfect schedule. Completing every unit may require heavy overtime, while avoiding overtime may create shortages or overload a particular machine.",
    work: "I added configurable objectives that compare shortages and overtime in sequence or combine them with weights. Other objectives cover peak utilization, load differences, and setup counts.",
    value: "The trade-off is no longer hard-coded. The team can explain what each plan prioritizes and compare the extra overtime or setups required for higher completion.",
    example: "Plan A completes everything with six overtime hours; Plan B leaves 500 units unfinished with no overtime. Different weights let the current business priority decide between them.",
  },
  {
    number: "06",
    title: "Integrated company work orders and completed data documentation",
    subtitle: "Combining orders from different sources with traceable field definitions",
    problem: "Company data comes from different files and dates. One order can appear in both an older source and a new work-order file, while required quantity may also depend on scrap rate.",
    work: "I defined reconciliation rules: the newest work order wins when records overlap, and scrap rate is included in required production. I also documented product fields, conflicts, assumptions, and open questions.",
    value: "New data enters the scheduling flow through consistent rules, and the team can distinguish confirmed definitions from assumptions. I later completed the updated work-order file and the Huachi project poster.",
    example: "When the same work order appears in old and new files, only the new version is kept. A five-percent expected scrap rate also increases the production input accordingly.",
  },
];
