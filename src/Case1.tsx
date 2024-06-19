import { lazy } from "react";
/**
 * Case1
 * TargetComponent is imported using lazy (dynamic import) in this case.
 * It doesn't wrapped with <Suspense> component.
 * It will cause an infinite loop of re-renders no matter the form is submitting or not.
 */
export default function Case1() {
  console.log("case1 rendered");
  const TargetComponent = lazy(() => import("./TargetComponent"));
  return <TargetComponent />;
}
