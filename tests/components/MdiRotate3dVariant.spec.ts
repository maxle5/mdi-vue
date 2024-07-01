
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRotate3dVariant from "../../src/components/MdiRotate3dVariant.vue";

test("MdiRotate3dVariant snapshot", () => {
  const wrapper = mount(MdiRotate3dVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
