
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarRefresh from "../../src/components/MdiCalendarRefresh.vue";

test("MdiCalendarRefresh snapshot", () => {
  const wrapper = mount(MdiCalendarRefresh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
