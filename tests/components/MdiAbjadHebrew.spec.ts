
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAbjadHebrew from "../../src/components/MdiAbjadHebrew.vue";

test("MdiAbjadHebrew snapshot", () => {
  const wrapper = mount(MdiAbjadHebrew, {});
  expect(wrapper.html()).toMatchSnapshot();
});
