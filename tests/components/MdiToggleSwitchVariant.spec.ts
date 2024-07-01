
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToggleSwitchVariant from "../../src/components/MdiToggleSwitchVariant.vue";

test("MdiToggleSwitchVariant snapshot", () => {
  const wrapper = mount(MdiToggleSwitchVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
