
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextShadow from "../../src/components/MdiTextShadow.vue";

test("MdiTextShadow snapshot", () => {
  const wrapper = mount(MdiTextShadow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
