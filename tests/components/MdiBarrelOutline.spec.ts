
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBarrelOutline from "../../src/components/MdiBarrelOutline.vue";

test("MdiBarrelOutline snapshot", () => {
  const wrapper = mount(MdiBarrelOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
