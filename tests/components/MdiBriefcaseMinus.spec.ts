
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseMinus from "../../src/components/MdiBriefcaseMinus.vue";

test("MdiBriefcaseMinus snapshot", () => {
  const wrapper = mount(MdiBriefcaseMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
