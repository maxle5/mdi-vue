
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHulu from "../../src/components/MdiHulu.vue";

test("MdiHulu snapshot", () => {
  const wrapper = mount(MdiHulu, {});
  expect(wrapper.html()).toMatchSnapshot();
});
