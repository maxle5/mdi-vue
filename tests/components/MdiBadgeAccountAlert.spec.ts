
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBadgeAccountAlert from "../../src/components/MdiBadgeAccountAlert.vue";

test("MdiBadgeAccountAlert snapshot", () => {
  const wrapper = mount(MdiBadgeAccountAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
