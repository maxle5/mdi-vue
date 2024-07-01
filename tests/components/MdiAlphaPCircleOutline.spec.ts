
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaPCircleOutline from "../../src/components/MdiAlphaPCircleOutline.vue";

test("MdiAlphaPCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaPCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
