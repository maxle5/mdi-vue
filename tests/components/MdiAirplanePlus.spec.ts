
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirplanePlus from "../../src/components/MdiAirplanePlus.vue";

test("MdiAirplanePlus snapshot", () => {
  const wrapper = mount(MdiAirplanePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
