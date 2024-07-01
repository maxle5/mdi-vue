
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlaskEmptyMinus from "../../src/components/MdiFlaskEmptyMinus.vue";

test("MdiFlaskEmptyMinus snapshot", () => {
  const wrapper = mount(MdiFlaskEmptyMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
