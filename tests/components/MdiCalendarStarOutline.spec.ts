
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarStarOutline from "../../src/components/MdiCalendarStarOutline.vue";

test("MdiCalendarStarOutline snapshot", () => {
  const wrapper = mount(MdiCalendarStarOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
