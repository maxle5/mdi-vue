
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarEditOutline from "../../src/components/MdiCalendarEditOutline.vue";

test("MdiCalendarEditOutline snapshot", () => {
  const wrapper = mount(MdiCalendarEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
