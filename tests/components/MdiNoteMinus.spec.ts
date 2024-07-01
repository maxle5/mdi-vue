
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNoteMinus from "../../src/components/MdiNoteMinus.vue";

test("MdiNoteMinus snapshot", () => {
  const wrapper = mount(MdiNoteMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
