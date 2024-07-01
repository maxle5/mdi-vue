
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoreMinus from "../../src/components/MdiStoreMinus.vue";

test("MdiStoreMinus snapshot", () => {
  const wrapper = mount(MdiStoreMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
