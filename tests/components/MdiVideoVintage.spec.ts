
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoVintage from "../../src/components/MdiVideoVintage.vue";

test("MdiVideoVintage snapshot", () => {
  const wrapper = mount(MdiVideoVintage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
