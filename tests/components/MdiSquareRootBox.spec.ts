
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSquareRootBox from "../../src/components/MdiSquareRootBox.vue";

test("MdiSquareRootBox snapshot", () => {
  const wrapper = mount(MdiSquareRootBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
