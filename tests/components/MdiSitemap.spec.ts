
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSitemap from "../../src/components/MdiSitemap.vue";

test("MdiSitemap snapshot", () => {
  const wrapper = mount(MdiSitemap, {});
  expect(wrapper.html()).toMatchSnapshot();
});
