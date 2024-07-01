
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProjectorScreenVariantOutline from "../../src/components/MdiProjectorScreenVariantOutline.vue";

test("MdiProjectorScreenVariantOutline snapshot", () => {
  const wrapper = mount(MdiProjectorScreenVariantOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
