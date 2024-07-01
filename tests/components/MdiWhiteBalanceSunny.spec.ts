
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWhiteBalanceSunny from "../../src/components/MdiWhiteBalanceSunny.vue";

test("MdiWhiteBalanceSunny snapshot", () => {
  const wrapper = mount(MdiWhiteBalanceSunny, {});
  expect(wrapper.html()).toMatchSnapshot();
});
