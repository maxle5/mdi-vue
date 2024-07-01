
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFlash from "../../src/components/MdiFlash.vue";

test("MdiFlash snapshot", () => {
  const wrapper = mount(MdiFlash, {});
  expect(wrapper.html()).toMatchSnapshot();
});
