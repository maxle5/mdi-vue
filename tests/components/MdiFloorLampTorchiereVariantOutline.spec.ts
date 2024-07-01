
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFloorLampTorchiereVariantOutline from "../../src/components/MdiFloorLampTorchiereVariantOutline.vue";

test("MdiFloorLampTorchiereVariantOutline snapshot", () => {
  const wrapper = mount(MdiFloorLampTorchiereVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
