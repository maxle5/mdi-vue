
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEt from "../../src/components/MdiEt.vue";

test("MdiEt snapshot", () => {
  const wrapper = mount(MdiEt, {});
  expect(wrapper.html()).toMatchSnapshot();
});
