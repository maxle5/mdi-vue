
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKnifeMilitary from "../../src/components/MdiKnifeMilitary.vue";

test("MdiKnifeMilitary snapshot", () => {
  const wrapper = mount(MdiKnifeMilitary, {});
  expect(wrapper.html()).toMatchSnapshot();
});
