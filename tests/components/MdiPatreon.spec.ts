
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPatreon from "../../src/components/MdiPatreon.vue";

test("MdiPatreon snapshot", () => {
  const wrapper = mount(MdiPatreon, {});
  expect(wrapper.html()).toMatchSnapshot();
});
