
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHorseshoe from "../../src/components/MdiHorseshoe.vue";

test("MdiHorseshoe snapshot", () => {
  const wrapper = mount(MdiHorseshoe, {});
  expect(wrapper.html()).toMatchSnapshot();
});
