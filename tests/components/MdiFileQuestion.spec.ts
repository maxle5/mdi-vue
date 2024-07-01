
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileQuestion from "../../src/components/MdiFileQuestion.vue";

test("MdiFileQuestion snapshot", () => {
  const wrapper = mount(MdiFileQuestion, {});
  expect(wrapper.html()).toMatchSnapshot();
});
