
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSki from "../../src/components/MdiSki.vue";

test("MdiSki snapshot", () => {
  const wrapper = mount(MdiSki, {});
  expect(wrapper.html()).toMatchSnapshot();
});
