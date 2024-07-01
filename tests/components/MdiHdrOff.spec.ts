
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHdrOff from "../../src/components/MdiHdrOff.vue";

test("MdiHdrOff snapshot", () => {
  const wrapper = mount(MdiHdrOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
