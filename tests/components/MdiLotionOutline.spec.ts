
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLotionOutline from "../../src/components/MdiLotionOutline.vue";

test("MdiLotionOutline snapshot", () => {
  const wrapper = mount(MdiLotionOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
