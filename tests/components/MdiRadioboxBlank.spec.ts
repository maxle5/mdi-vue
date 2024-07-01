
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRadioboxBlank from "../../src/components/MdiRadioboxBlank.vue";

test("MdiRadioboxBlank snapshot", () => {
  const wrapper = mount(MdiRadioboxBlank, {});
  expect(wrapper.html()).toMatchSnapshot();
});
