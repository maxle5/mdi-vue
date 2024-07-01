
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlagMinus from "../../src/components/MdiFlagMinus.vue";

test("MdiFlagMinus snapshot", () => {
  const wrapper = mount(MdiFlagMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
