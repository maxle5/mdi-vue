
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountQuestionOutline from "../../src/components/MdiAccountQuestionOutline.vue";

test("MdiAccountQuestionOutline snapshot", () => {
  const wrapper = mount(MdiAccountQuestionOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
