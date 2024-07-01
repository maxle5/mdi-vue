
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadQuestionOutline from "../../src/components/MdiHeadQuestionOutline.vue";

test("MdiHeadQuestionOutline snapshot", () => {
  const wrapper = mount(MdiHeadQuestionOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
