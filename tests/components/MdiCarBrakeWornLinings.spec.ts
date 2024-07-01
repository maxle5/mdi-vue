
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarBrakeWornLinings from "../../src/components/MdiCarBrakeWornLinings.vue";

test("MdiCarBrakeWornLinings snapshot", () => {
  const wrapper = mount(MdiCarBrakeWornLinings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
