
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCogOutline from "../../src/components/MdiCogOutline.vue";

test("MdiCogOutline snapshot", () => {
  const wrapper = mount(MdiCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
