
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVolumeVariantOff from "../../src/components/MdiVolumeVariantOff.vue";

test("MdiVolumeVariantOff snapshot", () => {
  const wrapper = mount(MdiVolumeVariantOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
