
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarRange from "../../src/components/MdiCalendarRange.vue";

test("MdiCalendarRange snapshot", () => {
  const wrapper = mount(MdiCalendarRange, {});
  expect(wrapper.html()).toMatchSnapshot();
});
