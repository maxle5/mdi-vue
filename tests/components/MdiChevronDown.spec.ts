
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChevronDown from "../../src/components/MdiChevronDown.vue";

test("MdiChevronDown snapshot", () => {
  const wrapper = mount(MdiChevronDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
