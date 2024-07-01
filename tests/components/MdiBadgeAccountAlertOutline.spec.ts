
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBadgeAccountAlertOutline from "../../src/components/MdiBadgeAccountAlertOutline.vue";

test("MdiBadgeAccountAlertOutline snapshot", () => {
  const wrapper = mount(MdiBadgeAccountAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
