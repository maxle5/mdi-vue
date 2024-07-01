
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLotionPlus from "../../src/components/MdiLotionPlus.vue";

test("MdiLotionPlus snapshot", () => {
  const wrapper = mount(MdiLotionPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
