
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSimpleIcons from "../../src/components/MdiSimpleIcons.vue";

test("MdiSimpleIcons snapshot", () => {
  const wrapper = mount(MdiSimpleIcons, {});
  expect(wrapper.html()).toMatchSnapshot();
});
