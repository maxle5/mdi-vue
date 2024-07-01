
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSquareOff from "../../src/components/MdiSquareOff.vue";

test("MdiSquareOff snapshot", () => {
  const wrapper = mount(MdiSquareOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
