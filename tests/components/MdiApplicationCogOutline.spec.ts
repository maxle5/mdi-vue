
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApplicationCogOutline from "../../src/components/MdiApplicationCogOutline.vue";

test("MdiApplicationCogOutline snapshot", () => {
  const wrapper = mount(MdiApplicationCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
