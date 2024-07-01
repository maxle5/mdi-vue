
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarAlert from "../../src/components/MdiCalendarAlert.vue";

test("MdiCalendarAlert snapshot", () => {
  const wrapper = mount(MdiCalendarAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
