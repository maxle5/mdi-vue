
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignYield from "../../src/components/MdiSignYield.vue";

test("MdiSignYield snapshot", () => {
  const wrapper = mount(MdiSignYield, {});
  expect(wrapper.html()).toMatchSnapshot();
});
