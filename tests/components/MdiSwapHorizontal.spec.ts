
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSwapHorizontal from "../../src/components/MdiSwapHorizontal.vue";

test("MdiSwapHorizontal snapshot", () => {
  const wrapper = mount(MdiSwapHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
