
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSword from "../../src/components/MdiSword.vue";

test("MdiSword snapshot", () => {
  const wrapper = mount(MdiSword, {});
  expect(wrapper.html()).toMatchSnapshot();
});
