
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProjectorScreenVariantOffOutline from "../../src/components/MdiProjectorScreenVariantOffOutline.vue";

test("MdiProjectorScreenVariantOffOutline snapshot", () => {
  const wrapper = mount(MdiProjectorScreenVariantOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
