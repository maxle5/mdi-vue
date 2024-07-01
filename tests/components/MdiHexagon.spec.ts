
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHexagon from "../../src/components/MdiHexagon.vue";

test("MdiHexagon snapshot", () => {
  const wrapper = mount(MdiHexagon, {});
  expect(wrapper.html()).toMatchSnapshot();
});
