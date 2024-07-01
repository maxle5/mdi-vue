
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCalendarHeart from "../../src/components/MdiCalendarHeart.vue";

test("MdiCalendarHeart snapshot", () => {
  const wrapper = mount(MdiCalendarHeart, {});
  expect(wrapper.html()).toMatchSnapshot();
});
