
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFanChevronDown from "../../src/components/MdiFanChevronDown.vue";

test("MdiFanChevronDown snapshot", () => {
  const wrapper = mount(MdiFanChevronDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
