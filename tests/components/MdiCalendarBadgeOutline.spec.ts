
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarBadgeOutline from "../../src/components/MdiCalendarBadgeOutline.vue";

test("MdiCalendarBadgeOutline snapshot", () => {
  const wrapper = mount(MdiCalendarBadgeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
