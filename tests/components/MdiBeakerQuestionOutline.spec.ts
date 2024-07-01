
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBeakerQuestionOutline from "../../src/components/MdiBeakerQuestionOutline.vue";

test("MdiBeakerQuestionOutline snapshot", () => {
  const wrapper = mount(MdiBeakerQuestionOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
