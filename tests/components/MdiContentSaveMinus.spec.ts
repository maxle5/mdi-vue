
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentSaveMinus from "../../src/components/MdiContentSaveMinus.vue";

test("MdiContentSaveMinus snapshot", () => {
  const wrapper = mount(MdiContentSaveMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
