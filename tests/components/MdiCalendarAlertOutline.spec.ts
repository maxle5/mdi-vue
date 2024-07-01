
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarAlertOutline from "../../src/components/MdiCalendarAlertOutline.vue";

test("MdiCalendarAlertOutline snapshot", () => {
  const wrapper = mount(MdiCalendarAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
