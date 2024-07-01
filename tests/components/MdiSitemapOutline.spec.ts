
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSitemapOutline from "../../src/components/MdiSitemapOutline.vue";

test("MdiSitemapOutline snapshot", () => {
  const wrapper = mount(MdiSitemapOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
