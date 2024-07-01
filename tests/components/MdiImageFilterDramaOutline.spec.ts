
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageFilterDramaOutline from "../../src/components/MdiImageFilterDramaOutline.vue";

test("MdiImageFilterDramaOutline snapshot", () => {
  const wrapper = mount(MdiImageFilterDramaOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
