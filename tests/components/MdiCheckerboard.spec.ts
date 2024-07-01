
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckerboard from "../../src/components/MdiCheckerboard.vue";

test("MdiCheckerboard snapshot", () => {
  const wrapper = mount(MdiCheckerboard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
