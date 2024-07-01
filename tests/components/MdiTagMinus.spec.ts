
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagMinus from "../../src/components/MdiTagMinus.vue";

test("MdiTagMinus snapshot", () => {
  const wrapper = mount(MdiTagMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
