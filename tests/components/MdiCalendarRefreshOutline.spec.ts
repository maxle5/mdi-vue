
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarRefreshOutline from "../../src/components/MdiCalendarRefreshOutline.vue";

test("MdiCalendarRefreshOutline snapshot", () => {
  const wrapper = mount(MdiCalendarRefreshOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
