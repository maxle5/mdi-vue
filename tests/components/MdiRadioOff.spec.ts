
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRadioOff from "../../src/components/MdiRadioOff.vue";

test("MdiRadioOff snapshot", () => {
  const wrapper = mount(MdiRadioOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
