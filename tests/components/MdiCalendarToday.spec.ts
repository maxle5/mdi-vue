
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarToday from "../../src/components/MdiCalendarToday.vue";

test("MdiCalendarToday snapshot", () => {
  const wrapper = mount(MdiCalendarToday, {});
  expect(wrapper.html()).toMatchSnapshot();
});
