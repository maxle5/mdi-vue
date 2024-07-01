
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSquareSmall from "../../src/components/MdiSquareSmall.vue";

test("MdiSquareSmall snapshot", () => {
  const wrapper = mount(MdiSquareSmall, {});
  expect(wrapper.html()).toMatchSnapshot();
});
