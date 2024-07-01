
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageQuestionOutline from "../../src/components/MdiMessageQuestionOutline.vue";

test("MdiMessageQuestionOutline snapshot", () => {
  const wrapper = mount(MdiMessageQuestionOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
