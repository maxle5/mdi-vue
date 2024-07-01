
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarCursorOutline from "../../src/components/MdiCalendarCursorOutline.vue";

test("MdiCalendarCursorOutline snapshot", () => {
  const wrapper = mount(MdiCalendarCursorOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
