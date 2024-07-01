
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBadgeAccountOutline from "../../src/components/MdiBadgeAccountOutline.vue";

test("MdiBadgeAccountOutline snapshot", () => {
  const wrapper = mount(MdiBadgeAccountOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
