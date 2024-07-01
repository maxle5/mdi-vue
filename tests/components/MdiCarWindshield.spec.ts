
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarWindshield from "../../src/components/MdiCarWindshield.vue";

test("MdiCarWindshield snapshot", () => {
  const wrapper = mount(MdiCarWindshield, {});
  expect(wrapper.html()).toMatchSnapshot();
});
