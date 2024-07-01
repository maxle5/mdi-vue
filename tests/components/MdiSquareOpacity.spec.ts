
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSquareOpacity from "../../src/components/MdiSquareOpacity.vue";

test("MdiSquareOpacity snapshot", () => {
  const wrapper = mount(MdiSquareOpacity, {});
  expect(wrapper.html()).toMatchSnapshot();
});
