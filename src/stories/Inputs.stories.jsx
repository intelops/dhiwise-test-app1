import React from "react";

import { Input } from "components";

export default {
  title: "chandu_s_application1/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
