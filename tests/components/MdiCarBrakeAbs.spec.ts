
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarBrakeAbs from "../../src/components/MdiCarBrakeAbs.vue";

test("MdiCarBrakeAbs snapshot", () => {
  const wrapper = mount(MdiCarBrakeAbs, {});
  expect(wrapper.html()).toMatchSnapshot();
});
