
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlipHorizontal from "../../src/components/MdiFlipHorizontal.vue";

test("MdiFlipHorizontal snapshot", () => {
  const wrapper = mount(MdiFlipHorizontal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
