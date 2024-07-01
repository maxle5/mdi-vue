
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarShiftPattern from "../../src/components/MdiCarShiftPattern.vue";

test("MdiCarShiftPattern snapshot", () => {
  const wrapper = mount(MdiCarShiftPattern, {});
  expect(wrapper.html()).toMatchSnapshot();
});
