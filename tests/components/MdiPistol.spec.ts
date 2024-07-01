
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPistol from "../../src/components/MdiPistol.vue";

test("MdiPistol snapshot", () => {
  const wrapper = mount(MdiPistol, {});
  expect(wrapper.html()).toMatchSnapshot();
});
