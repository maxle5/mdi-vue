
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSocialDistance6Feet from "../../src/components/MdiSocialDistance6Feet.vue";

test("MdiSocialDistance6Feet snapshot", () => {
  const wrapper = mount(MdiSocialDistance6Feet, {});
  expect(wrapper.html()).toMatchSnapshot();
});
