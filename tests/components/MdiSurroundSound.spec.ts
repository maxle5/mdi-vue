
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSurroundSound from "../../src/components/MdiSurroundSound.vue";

test("MdiSurroundSound snapshot", () => {
  const wrapper = mount(MdiSurroundSound, {});
  expect(wrapper.html()).toMatchSnapshot();
});
