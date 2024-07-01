
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewGallery from "../../src/components/MdiViewGallery.vue";

test("MdiViewGallery snapshot", () => {
  const wrapper = mount(MdiViewGallery, {});
  expect(wrapper.html()).toMatchSnapshot();
});
