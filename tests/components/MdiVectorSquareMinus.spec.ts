
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorSquareMinus from "../../src/components/MdiVectorSquareMinus.vue";

test("MdiVectorSquareMinus snapshot", () => {
  const wrapper = mount(MdiVectorSquareMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
