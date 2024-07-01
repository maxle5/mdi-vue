
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBaseballDiamondOutline from "../../src/components/MdiBaseballDiamondOutline.vue";

test("MdiBaseballDiamondOutline snapshot", () => {
  const wrapper = mount(MdiBaseballDiamondOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
