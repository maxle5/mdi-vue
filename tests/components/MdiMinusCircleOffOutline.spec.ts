
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMinusCircleOffOutline from "../../src/components/MdiMinusCircleOffOutline.vue";

test("MdiMinusCircleOffOutline snapshot", () => {
  const wrapper = mount(MdiMinusCircleOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
