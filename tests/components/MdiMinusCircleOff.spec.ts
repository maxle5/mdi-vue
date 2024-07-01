
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMinusCircleOff from "../../src/components/MdiMinusCircleOff.vue";

test("MdiMinusCircleOff snapshot", () => {
  const wrapper = mount(MdiMinusCircleOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
