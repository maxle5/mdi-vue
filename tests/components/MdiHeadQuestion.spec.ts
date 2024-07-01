
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadQuestion from "../../src/components/MdiHeadQuestion.vue";

test("MdiHeadQuestion snapshot", () => {
  const wrapper = mount(MdiHeadQuestion, {});
  expect(wrapper.html()).toMatchSnapshot();
});
