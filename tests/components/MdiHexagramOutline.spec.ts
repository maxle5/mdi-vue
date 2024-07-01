
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHexagramOutline from "../../src/components/MdiHexagramOutline.vue";

test("MdiHexagramOutline snapshot", () => {
  const wrapper = mount(MdiHexagramOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
