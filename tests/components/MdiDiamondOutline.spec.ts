
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiamondOutline from "../../src/components/MdiDiamondOutline.vue";

test("MdiDiamondOutline snapshot", () => {
  const wrapper = mount(MdiDiamondOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
