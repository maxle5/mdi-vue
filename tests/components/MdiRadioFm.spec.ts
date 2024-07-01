
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRadioFm from "../../src/components/MdiRadioFm.vue";

test("MdiRadioFm snapshot", () => {
  const wrapper = mount(MdiRadioFm, {});
  expect(wrapper.html()).toMatchSnapshot();
});
