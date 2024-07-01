
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrayMinus from "../../src/components/MdiTrayMinus.vue";

test("MdiTrayMinus snapshot", () => {
  const wrapper = mount(MdiTrayMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
