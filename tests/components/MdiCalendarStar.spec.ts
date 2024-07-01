
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarStar from "../../src/components/MdiCalendarStar.vue";

test("MdiCalendarStar snapshot", () => {
  const wrapper = mount(MdiCalendarStar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
