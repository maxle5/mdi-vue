
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPineTreeVariantOutline from "../../src/components/MdiPineTreeVariantOutline.vue";

test("MdiPineTreeVariantOutline snapshot", () => {
  const wrapper = mount(MdiPineTreeVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
