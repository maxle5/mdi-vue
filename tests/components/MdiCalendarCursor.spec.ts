
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarCursor from "../../src/components/MdiCalendarCursor.vue";

test("MdiCalendarCursor snapshot", () => {
  const wrapper = mount(MdiCalendarCursor, {});
  expect(wrapper.html()).toMatchSnapshot();
});
