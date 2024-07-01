
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarPlus from "../../src/components/MdiCalendarPlus.vue";

test("MdiCalendarPlus snapshot", () => {
  const wrapper = mount(MdiCalendarPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
