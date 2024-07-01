
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiProjectorScreenVariantOff from "../../src/components/MdiProjectorScreenVariantOff.vue";

test("MdiProjectorScreenVariantOff snapshot", () => {
  const wrapper = mount(MdiProjectorScreenVariantOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
