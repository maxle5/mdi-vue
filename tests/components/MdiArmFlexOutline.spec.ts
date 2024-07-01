
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArmFlexOutline from "../../src/components/MdiArmFlexOutline.vue";

test("MdiArmFlexOutline snapshot", () => {
  const wrapper = mount(MdiArmFlexOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
