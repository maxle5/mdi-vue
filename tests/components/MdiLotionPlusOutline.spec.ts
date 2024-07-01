
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLotionPlusOutline from "../../src/components/MdiLotionPlusOutline.vue";

test("MdiLotionPlusOutline snapshot", () => {
  const wrapper = mount(MdiLotionPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
