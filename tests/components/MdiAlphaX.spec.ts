
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaX from "../../src/components/MdiAlphaX.vue";

test("MdiAlphaX snapshot", () => {
  const wrapper = mount(MdiAlphaX, {});
  expect(wrapper.html()).toMatchSnapshot();
});
