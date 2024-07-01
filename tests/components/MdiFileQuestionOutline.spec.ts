
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileQuestionOutline from "../../src/components/MdiFileQuestionOutline.vue";

test("MdiFileQuestionOutline snapshot", () => {
  const wrapper = mount(MdiFileQuestionOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
