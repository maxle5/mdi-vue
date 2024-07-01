
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarSync from "../../src/components/MdiCalendarSync.vue";

test("MdiCalendarSync snapshot", () => {
  const wrapper = mount(MdiCalendarSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
