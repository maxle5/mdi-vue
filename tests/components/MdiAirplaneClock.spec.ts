
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirplaneClock from "../../src/components/MdiAirplaneClock.vue";

test("MdiAirplaneClock snapshot", () => {
  const wrapper = mount(MdiAirplaneClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
