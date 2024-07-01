
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiversify from "../../src/components/MdiDiversify.vue";

test("MdiDiversify snapshot", () => {
  const wrapper = mount(MdiDiversify, {});
  expect(wrapper.html()).toMatchSnapshot();
});
