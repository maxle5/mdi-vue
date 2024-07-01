
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBugCheck from "../../src/components/MdiBugCheck.vue";

test("MdiBugCheck snapshot", () => {
  const wrapper = mount(MdiBugCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
