
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPigVariantOutline from "../../src/components/MdiPigVariantOutline.vue";

test("MdiPigVariantOutline snapshot", () => {
  const wrapper = mount(MdiPigVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
