
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarAccountOutline from "../../src/components/MdiCalendarAccountOutline.vue";

test("MdiCalendarAccountOutline snapshot", () => {
  const wrapper = mount(MdiCalendarAccountOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
