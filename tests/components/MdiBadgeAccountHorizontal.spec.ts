
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBadgeAccountHorizontal from "../../src/components/MdiBadgeAccountHorizontal.vue";

test("MdiBadgeAccountHorizontal snapshot", () => {
  const wrapper = mount(MdiBadgeAccountHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
