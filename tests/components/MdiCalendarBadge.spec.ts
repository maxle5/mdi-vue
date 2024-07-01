
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarBadge from "../../src/components/MdiCalendarBadge.vue";

test("MdiCalendarBadge snapshot", () => {
  const wrapper = mount(MdiCalendarBadge, {});
  expect(wrapper.html()).toMatchSnapshot();
});
