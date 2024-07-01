
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorPolylineMinus from "../../src/components/MdiVectorPolylineMinus.vue";

test("MdiVectorPolylineMinus snapshot", () => {
  const wrapper = mount(MdiVectorPolylineMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
