
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewGalleryOutline from "../../src/components/MdiViewGalleryOutline.vue";

test("MdiViewGalleryOutline snapshot", () => {
  const wrapper = mount(MdiViewGalleryOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
