
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbQuestionOutline from "../../src/components/MdiLightbulbQuestionOutline.vue";

test("MdiLightbulbQuestionOutline snapshot", () => {
  const wrapper = mount(MdiLightbulbQuestionOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
