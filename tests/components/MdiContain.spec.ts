
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContain from "../../src/components/MdiContain.vue";

test("MdiContain snapshot", () => {
  const wrapper = mount(MdiContain, {});
  expect(wrapper.html()).toMatchSnapshot();
});
