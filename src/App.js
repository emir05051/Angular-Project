import "./App.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "all" });

  const [isEmpty, setIsEmpty] = useState(true);

  const minLength = 5;

  const onSubmit = (data) => {
    alert(`Username: ${data.username}`);
  };

  useEffect(() => {
    const subscription = watch((value) => {
      if (value) setIsEmpty(!isEmpty);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className="main">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex column max-300">
          <label htmlFor="username">Username</label>
          <input
            placeholder="bill"
            id="username"
            autoComplete="off"
            {...register("username", { required: true, minLength: minLength })}
          />
          {errors.username?.type === "required" && <p>This is required</p>}
          {errors.username?.type === "minLength" && (
            <p>Min minLength: {minLength}</p>
          )}
        </div>
        <button disabled={errors.username || isEmpty}>Submit</button>
      </form>
    </div>
  );
}

export default App;
