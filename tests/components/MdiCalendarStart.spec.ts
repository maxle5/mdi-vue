
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarStart from "../../src/components/MdiCalendarStart.vue";

test("MdiCalendarStart snapshot", () => {
  const wrapper = mount(MdiCalendarStart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
