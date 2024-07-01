
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookMinus from "../../src/components/MdiBookMinus.vue";

test("MdiBookMinus snapshot", () => {
  const wrapper = mount(MdiBookMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
