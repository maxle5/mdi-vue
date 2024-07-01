
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMinusCircleMultipleOutline from "../../src/components/MdiMinusCircleMultipleOutline.vue";

test("MdiMinusCircleMultipleOutline snapshot", () => {
  const wrapper = mount(MdiMinusCircleMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
