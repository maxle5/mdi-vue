
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkullCrossbones from "../../src/components/MdiSkullCrossbones.vue";

test("MdiSkullCrossbones snapshot", () => {
  const wrapper = mount(MdiSkullCrossbones, {});
  expect(wrapper.html()).toMatchSnapshot();
});
