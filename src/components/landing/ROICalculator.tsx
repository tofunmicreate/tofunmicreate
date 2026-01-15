import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Calculator, TrendingUp, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export const ROICalculator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [monthlyVisitors, setMonthlyVisitors] = useState(10000);
  const [currentConversionRate, setCurrentConversionRate] = useState(2);
  const [averageOrderValue, setAverageOrderValue] = useState(75);

  const calculations = useMemo(() => {
    const currentMonthlyOrders = (monthlyVisitors * currentConversionRate) / 100;
    const currentMonthlyRevenue = currentMonthlyOrders * averageOrderValue;

    // Assuming a 50% improvement in conversion rate (conservative estimate)
    const improvedConversionRate = currentConversionRate * 1.5;
    const newMonthlyOrders = (monthlyVisitors * improvedConversionRate) / 100;
    const newMonthlyRevenue = newMonthlyOrders * averageOrderValue;

    const monthlyIncrease = newMonthlyRevenue - currentMonthlyRevenue;
    const yearlyIncrease = monthlyIncrease * 12;

    return {
      currentMonthlyRevenue,
      newMonthlyRevenue,
      monthlyIncrease,
      yearlyIncrease,
      improvedConversionRate,
    };
  }, [monthlyVisitors, currentConversionRate, averageOrderValue]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  return (
    <section id="calculator" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            ROI Calculator
          </div>
          <h2 className="heading-section mb-4">
            See Your Potential Revenue Growth
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Adjust the sliders below to see how much additional revenue you could generate 
            with a 50% improvement in your conversion rate.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border"
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground">Your Current Numbers</h3>
              
              <div className="space-y-8">
                {/* Monthly Visitors */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-foreground">
                      Monthly Visitors
                    </label>
                    <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {formatNumber(monthlyVisitors)}
                    </span>
                  </div>
                  <Slider
                    value={[monthlyVisitors]}
                    onValueChange={(value) => setMonthlyVisitors(value[0])}
                    min={1000}
                    max={100000}
                    step={1000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1K</span>
                    <span>100K</span>
                  </div>
                </div>

                {/* Current Conversion Rate */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-foreground">
                      Current Conversion Rate
                    </label>
                    <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {currentConversionRate.toFixed(1)}%
                    </span>
                  </div>
                  <Slider
                    value={[currentConversionRate]}
                    onValueChange={(value) => setCurrentConversionRate(value[0])}
                    min={0.5}
                    max={5}
                    step={0.1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>0.5%</span>
                    <span>5%</span>
                  </div>
                </div>

                {/* Average Order Value */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-foreground">
                      Average Order Value
                    </label>
                    <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {formatCurrency(averageOrderValue)}
                    </span>
                  </div>
                  <Slider
                    value={[averageOrderValue]}
                    onValueChange={(value) => setAverageOrderValue(value[0])}
                    min={20}
                    max={500}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>$20</span>
                    <span>$500</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-primary rounded-2xl p-6 md:p-8 text-primary-foreground"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Your Potential Growth
              </h3>

              <div className="space-y-6">
                {/* Current Revenue */}
                <div className="bg-primary-foreground/10 rounded-xl p-4">
                  <p className="text-sm text-primary-foreground/70 mb-1">Current Monthly Revenue</p>
                  <p className="text-2xl font-bold">
                    {formatCurrency(calculations.currentMonthlyRevenue)}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="bg-accent/20 rounded-full p-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                  </div>
                </div>

                {/* Projected Revenue */}
                <div className="bg-accent/20 rounded-xl p-4 border-2 border-accent/30">
                  <p className="text-sm text-primary-foreground/70 mb-1">
                    Projected Monthly Revenue
                    <span className="ml-2 text-accent">
                      ({calculations.improvedConversionRate.toFixed(1)}% CR)
                    </span>
                  </p>
                  <p className="text-3xl font-bold text-accent">
                    {formatCurrency(calculations.newMonthlyRevenue)}
                  </p>
                </div>

                {/* Additional Revenue */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-foreground/10 rounded-xl p-4 text-center">
                    <DollarSign className="w-5 h-5 text-accent mx-auto mb-2" />
                    <p className="text-xs text-primary-foreground/70 mb-1">Monthly Increase</p>
                    <p className="text-lg font-bold text-accent">
                      +{formatCurrency(calculations.monthlyIncrease)}
                    </p>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-xl p-4 text-center">
                    <TrendingUp className="w-5 h-5 text-accent mx-auto mb-2" />
                    <p className="text-xs text-primary-foreground/70 mb-1">Yearly Increase</p>
                    <p className="text-lg font-bold text-accent">
                      +{formatCurrency(calculations.yearlyIncrease)}
                    </p>
                  </div>
                </div>
              </div>

              <Button variant="accent" size="lg" className="w-full mt-6" asChild>
                <a href="mailto:hello@tofunmicreative.com">
                  Get Your Free Audit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            * Based on a conservative 50% improvement in conversion rate. Actual results may vary 
            depending on your store's current state and optimization opportunities.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
