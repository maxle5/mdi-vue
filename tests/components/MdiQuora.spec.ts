
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiQuora from "../../src/components/MdiQuora.vue";

test("MdiQuora snapshot", () => {
  const wrapper = mount(MdiQuora, {});
  expect(wrapper.html()).toMatchSnapshot();
});
