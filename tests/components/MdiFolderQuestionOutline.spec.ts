
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderQuestionOutline from "../../src/components/MdiFolderQuestionOutline.vue";

test("MdiFolderQuestionOutline snapshot", () => {
  const wrapper = mount(MdiFolderQuestionOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
