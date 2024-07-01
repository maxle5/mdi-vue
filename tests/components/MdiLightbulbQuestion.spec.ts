
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightbulbQuestion from "../../src/components/MdiLightbulbQuestion.vue";

test("MdiLightbulbQuestion snapshot", () => {
  const wrapper = mount(MdiLightbulbQuestion, {});
  expect(wrapper.html()).toMatchSnapshot();
});
