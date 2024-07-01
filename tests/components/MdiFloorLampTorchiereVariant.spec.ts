
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFloorLampTorchiereVariant from "../../src/components/MdiFloorLampTorchiereVariant.vue";

test("MdiFloorLampTorchiereVariant snapshot", () => {
  const wrapper = mount(MdiFloorLampTorchiereVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
