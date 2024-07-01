
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarRemove from "../../src/components/MdiCalendarRemove.vue";

test("MdiCalendarRemove snapshot", () => {
  const wrapper = mount(MdiCalendarRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
