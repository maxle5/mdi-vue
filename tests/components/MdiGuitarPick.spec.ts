
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGuitarPick from "../../src/components/MdiGuitarPick.vue";

test("MdiGuitarPick snapshot", () => {
  const wrapper = mount(MdiGuitarPick, {});
  expect(wrapper.html()).toMatchSnapshot();
});
