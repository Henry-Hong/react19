import { Suspense, lazy } from "react";
import { useFormStatus } from "react-dom";

/**
 * Case3
 * TargetComponent is imported using lazy (dynamic import) like Case1, Case2.
 * It is wrapped with <Suspense> component like Case2.
 * and it has a dependency on the form status.
 * It will cause an infinite loop of re-renders "when the form has done submitting."
 */
export default function Case3() {
  const { pending } = useFormStatus();
  console.log("case3 rendered", pending);
  const TargetComponent = lazy(() => import("./TargetComponent"));
  return (
    <Suspense>
      <TargetComponent />
    </Suspense>
  );
}
