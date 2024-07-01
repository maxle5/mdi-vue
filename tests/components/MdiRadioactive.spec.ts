
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRadioactive from "../../src/components/MdiRadioactive.vue";

test("MdiRadioactive snapshot", () => {
  const wrapper = mount(MdiRadioactive, {});
  expect(wrapper.html()).toMatchSnapshot();
});
