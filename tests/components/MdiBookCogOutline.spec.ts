
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookCogOutline from "../../src/components/MdiBookCogOutline.vue";

test("MdiBookCogOutline snapshot", () => {
  const wrapper = mount(MdiBookCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
