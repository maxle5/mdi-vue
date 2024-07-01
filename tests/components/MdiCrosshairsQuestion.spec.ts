
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCrosshairsQuestion from "../../src/components/MdiCrosshairsQuestion.vue";

test("MdiCrosshairsQuestion snapshot", () => {
  const wrapper = mount(MdiCrosshairsQuestion, {});
  expect(wrapper.html()).toMatchSnapshot();
});
