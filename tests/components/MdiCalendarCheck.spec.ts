
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarCheck from "../../src/components/MdiCalendarCheck.vue";

test("MdiCalendarCheck snapshot", () => {
  const wrapper = mount(MdiCalendarCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
