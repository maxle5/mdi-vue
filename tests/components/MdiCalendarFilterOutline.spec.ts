
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarFilterOutline from "../../src/components/MdiCalendarFilterOutline.vue";

test("MdiCalendarFilterOutline snapshot", () => {
  const wrapper = mount(MdiCalendarFilterOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
