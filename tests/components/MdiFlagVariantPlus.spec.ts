
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlagVariantPlus from "../../src/components/MdiFlagVariantPlus.vue";

test("MdiFlagVariantPlus snapshot", () => {
  const wrapper = mount(MdiFlagVariantPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
