
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendar from "../../src/components/MdiCalendar.vue";

test("MdiCalendar snapshot", () => {
  const wrapper = mount(MdiCalendar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
