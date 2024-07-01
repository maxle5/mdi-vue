
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFanMinus from "../../src/components/MdiFanMinus.vue";

test("MdiFanMinus snapshot", () => {
  const wrapper = mount(MdiFanMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
