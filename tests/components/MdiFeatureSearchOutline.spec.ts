
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFeatureSearchOutline from "../../src/components/MdiFeatureSearchOutline.vue";

test("MdiFeatureSearchOutline snapshot", () => {
  const wrapper = mount(MdiFeatureSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
