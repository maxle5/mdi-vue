
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPassportMinus from "../../src/components/MdiPassportMinus.vue";

test("MdiPassportMinus snapshot", () => {
  const wrapper = mount(MdiPassportMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
