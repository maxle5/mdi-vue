
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRadioAm from "../../src/components/MdiRadioAm.vue";

test("MdiRadioAm snapshot", () => {
  const wrapper = mount(MdiRadioAm, {});
  expect(wrapper.html()).toMatchSnapshot();
});
