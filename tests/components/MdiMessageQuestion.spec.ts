
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageQuestion from "../../src/components/MdiMessageQuestion.vue";

test("MdiMessageQuestion snapshot", () => {
  const wrapper = mount(MdiMessageQuestion, {});
  expect(wrapper.html()).toMatchSnapshot();
});
