
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBadgeAccountHorizontalOutline from "../../src/components/MdiBadgeAccountHorizontalOutline.vue";

test("MdiBadgeAccountHorizontalOutline snapshot", () => {
  const wrapper = mount(MdiBadgeAccountHorizontalOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
