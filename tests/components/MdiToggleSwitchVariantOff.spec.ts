
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToggleSwitchVariantOff from "../../src/components/MdiToggleSwitchVariantOff.vue";

test("MdiToggleSwitchVariantOff snapshot", () => {
  const wrapper = mount(MdiToggleSwitchVariantOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
