
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSetLeftCenter from "../../src/components/MdiSetLeftCenter.vue";

test("MdiSetLeftCenter snapshot", () => {
  const wrapper = mount(MdiSetLeftCenter, {});
  expect(wrapper.html()).toMatchSnapshot();
});
