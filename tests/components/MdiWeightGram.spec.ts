
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeightGram from "../../src/components/MdiWeightGram.vue";

test("MdiWeightGram snapshot", () => {
  const wrapper = mount(MdiWeightGram, {});
  expect(wrapper.html()).toMatchSnapshot();
});
