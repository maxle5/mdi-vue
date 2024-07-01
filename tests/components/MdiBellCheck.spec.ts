
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellCheck from "../../src/components/MdiBellCheck.vue";

test("MdiBellCheck snapshot", () => {
  const wrapper = mount(MdiBellCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
