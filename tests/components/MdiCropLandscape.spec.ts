
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCropLandscape from "../../src/components/MdiCropLandscape.vue";

test("MdiCropLandscape snapshot", () => {
  const wrapper = mount(MdiCropLandscape, {});
  expect(wrapper.html()).toMatchSnapshot();
});
