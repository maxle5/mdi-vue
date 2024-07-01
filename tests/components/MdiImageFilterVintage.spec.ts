
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageFilterVintage from "../../src/components/MdiImageFilterVintage.vue";

test("MdiImageFilterVintage snapshot", () => {
  const wrapper = mount(MdiImageFilterVintage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
