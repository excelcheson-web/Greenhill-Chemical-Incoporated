import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  label: string;
  description: string;
}

interface StepperProps {
  steps: Step[];
}

export function Stepper({ steps }: StepperProps) {
  return (
    <ol className="relative space-y-0" aria-label="Chemical supply journey">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <li key={step.label} className="relative flex gap-6 pb-10 last:pb-0">
            {/* Vertical connector line */}
            {!isLast && (
              <div
                className="absolute left-5 top-10 h-[calc(100%-1.5rem)] w-0.5 bg-brand-mint/30"
                aria-hidden="true"
              />
            )}

            {/* Step circle */}
            <div
              className={cn(
                "relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold",
                isLast
                  ? "border-brand-mint bg-brand-mint text-brand-anthracite"
                  : "border-brand-mint bg-brand-clean text-brand-mint"
              )}
              aria-hidden="true"
            >
              {isLast ? (
                <Check className="h-5 w-5" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>

            {/* Step content */}
            <div className="pt-1">
              <h3 className="text-lg font-semibold text-brand-anthracite">
                {step.label}
              </h3>
              <p className="mt-1 leading-relaxed text-brand-anthracite/70">
                {step.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
