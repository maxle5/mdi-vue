
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrentAc from "../../src/components/MdiCurrentAc.vue";

test("MdiCurrentAc snapshot", () => {
  const wrapper = mount(MdiCurrentAc, {});
  expect(wrapper.html()).toMatchSnapshot();
});
