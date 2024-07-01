
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaQ from "../../src/components/MdiAlphaQ.vue";

test("MdiAlphaQ snapshot", () => {
  const wrapper = mount(MdiAlphaQ, {});
  expect(wrapper.html()).toMatchSnapshot();
});
