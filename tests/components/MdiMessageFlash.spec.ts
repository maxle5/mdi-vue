
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageFlash from "../../src/components/MdiMessageFlash.vue";

test("MdiMessageFlash snapshot", () => {
  const wrapper = mount(MdiMessageFlash, {});
  expect(wrapper.html()).toMatchSnapshot();
});
