
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCogPlayOutline from "../../src/components/MdiCogPlayOutline.vue";

test("MdiCogPlayOutline snapshot", () => {
  const wrapper = mount(MdiCogPlayOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
