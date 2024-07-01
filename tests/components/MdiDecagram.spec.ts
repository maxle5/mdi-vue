
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDecagram from "../../src/components/MdiDecagram.vue";

test("MdiDecagram snapshot", () => {
  const wrapper = mount(MdiDecagram, {});
  expect(wrapper.html()).toMatchSnapshot();
});
