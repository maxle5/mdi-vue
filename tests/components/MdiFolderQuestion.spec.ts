
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderQuestion from "../../src/components/MdiFolderQuestion.vue";

test("MdiFolderQuestion snapshot", () => {
  const wrapper = mount(MdiFolderQuestion, {});
  expect(wrapper.html()).toMatchSnapshot();
});
