
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskMinus from "../../src/components/MdiFlaskMinus.vue";

test("MdiFlaskMinus snapshot", () => {
  const wrapper = mount(MdiFlaskMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
