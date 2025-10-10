// data:
// initail amount
// annual contibution
// expected return
// duration

type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number; // as a percentage
  duration: number; // in years
};

type InvestmentResult = {
  year: number;
  totalContribution: number;
  interestEarned: number;
  totalAmount: number;
};

type calculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): calculationResult {
  const {
    initialAmount: initialAmount,
    annualContribution,
    expectedReturn,
    duration,
  } = data;
  if (initialAmount < 0) {
    return "Initial amount must be greater than 0";
  }
  if (duration <= 0) {
    return "No valid amount of years provided";
  }
  if (expectedReturn < 0) {
    return "Expected return must be greater than 0";
  }

  let totalAmount = initialAmount;
  let totalContribution = initialAmount;
  let totalIntrestEarned = 0;
  const annualResults: InvestmentResult[] = [];

  for (let i = 0; i < duration; i++) {
    const intrestEarned = totalAmount * (expectedReturn / 100);
    totalIntrestEarned += intrestEarned;
    totalContribution += annualContribution;
    totalAmount += intrestEarned + annualContribution;
    annualResults.push({
      year: i + 1,
      totalAmount: Math.round(totalAmount),
      totalContribution: Math.round(totalContribution),
      interestEarned: Math.round(intrestEarned),
    });
  }
  return annualResults;
}

function PrintResult(results: calculationResult) {
  if (typeof results === "string") {
    console.log(results);
    return;
  }
  console.log();
  console.log("📈 Investment Growth Summary:");
  console.log("---------------------------------");

  for (const yearEndResult of results) {
    console.log(
      `Year ${yearEndResult.year}: 
Total Amount: ${yearEndResult.totalAmount},
Total Contribution: ${yearEndResult.totalContribution}, 
Interest Earned: ${yearEndResult.interestEarned},
--------------------------------`
      // just for better readability
    );
  }
}

const investmentData: InvestmentData = {
  initialAmount: 1000,
  annualContribution: 1000,
  expectedReturn: 7,
  duration: 10,
};

const results = calculateInvestment(investmentData);

PrintResult(results);
