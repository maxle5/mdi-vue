
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaBCircleOutline from "../../src/components/MdiAlphaBCircleOutline.vue";

test("MdiAlphaBCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaBCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
