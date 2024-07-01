
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountQuestion from "../../src/components/MdiAccountQuestion.vue";

test("MdiAccountQuestion snapshot", () => {
  const wrapper = mount(MdiAccountQuestion, {});
  expect(wrapper.html()).toMatchSnapshot();
});
