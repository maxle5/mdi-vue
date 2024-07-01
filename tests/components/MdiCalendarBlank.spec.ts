
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarBlank from "../../src/components/MdiCalendarBlank.vue";

test("MdiCalendarBlank snapshot", () => {
  const wrapper = mount(MdiCalendarBlank, {});
  expect(wrapper.html()).toMatchSnapshot();
});
