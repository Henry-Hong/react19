import { Suspense, lazy } from "react";

interface IDynamicComponentProps {
  componentName: "HeavyLoading" | "HeavyNormal";
}

const DynamicComponent = function ({ componentName }: IDynamicComponentProps) {
  const Component = lazy(
    () => import(`./heavyComponents/${componentName}.tsx`)
  );
  return (
    <Suspense fallback={<div className="w-[24px] h-[24px]"></div>}>
      <Component />
    </Suspense>
  );
};

export default DynamicComponent;

// (prev, next) => prev.iconName === next.iconName && _.isEqual(prev.svgProps, next.svgProps)
