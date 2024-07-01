
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSiloOutline from "../../src/components/MdiSiloOutline.vue";

test("MdiSiloOutline snapshot", () => {
  const wrapper = mount(MdiSiloOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
