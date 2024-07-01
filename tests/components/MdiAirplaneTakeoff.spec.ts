
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirplaneTakeoff from "../../src/components/MdiAirplaneTakeoff.vue";

test("MdiAirplaneTakeoff snapshot", () => {
  const wrapper = mount(MdiAirplaneTakeoff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
