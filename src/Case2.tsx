import { Suspense, lazy } from "react";

/**
 * Case2
 * TargetComponent is imported using lazy (dynamic import) like Case1.
 * But it is wrapped with <Suspense> component.
 * It will not cause an infinite loop of re-renders no matter the form is submitting or not.
 */
export default function Case2() {
  console.log("case2 rendered");
  const TargetComponent = lazy(() => import("./TargetComponent"));
  return (
    <Suspense>
      <TargetComponent />
    </Suspense>
  );
}
