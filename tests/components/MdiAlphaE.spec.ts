
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaE from "../../src/components/MdiAlphaE.vue";

test("MdiAlphaE snapshot", () => {
  const wrapper = mount(MdiAlphaE, {});
  expect(wrapper.html()).toMatchSnapshot();
});
