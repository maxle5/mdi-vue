
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiamondStone from "../../src/components/MdiDiamondStone.vue";

test("MdiDiamondStone snapshot", () => {
  const wrapper = mount(MdiDiamondStone, {});
  expect(wrapper.html()).toMatchSnapshot();
});
