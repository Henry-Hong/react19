import { useFormStatus } from "react-dom";
import DynamicComponent from "./DynamicComponent";

export default function StatusComponent() {
  const { pending } = useFormStatus();

  console.log("rendered!");

  return (
    <div>
      <DynamicComponent
        componentName={pending ? "HeavyLoading" : "HeavyNormal"}
      />
    </div>
  );
}
