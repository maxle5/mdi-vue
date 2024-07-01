
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarFilter from "../../src/components/MdiCalendarFilter.vue";

test("MdiCalendarFilter snapshot", () => {
  const wrapper = mount(MdiCalendarFilter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
