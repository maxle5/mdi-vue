
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStairsDown from "../../src/components/MdiStairsDown.vue";

test("MdiStairsDown snapshot", () => {
  const wrapper = mount(MdiStairsDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
