
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableQuestion from "../../src/components/MdiTableQuestion.vue";

test("MdiTableQuestion snapshot", () => {
  const wrapper = mount(MdiTableQuestion, {});
  expect(wrapper.html()).toMatchSnapshot();
});
