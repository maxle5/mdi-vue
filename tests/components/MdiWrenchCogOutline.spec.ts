
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWrenchCogOutline from "../../src/components/MdiWrenchCogOutline.vue";

test("MdiWrenchCogOutline snapshot", () => {
  const wrapper = mount(MdiWrenchCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
