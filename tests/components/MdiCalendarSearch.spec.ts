
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarSearch from "../../src/components/MdiCalendarSearch.vue";

test("MdiCalendarSearch snapshot", () => {
  const wrapper = mount(MdiCalendarSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
