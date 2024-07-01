
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaP from "../../src/components/MdiAlphaP.vue";

test("MdiAlphaP snapshot", () => {
  const wrapper = mount(MdiAlphaP, {});
  expect(wrapper.html()).toMatchSnapshot();
});
