
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRadioactiveCircle from "../../src/components/MdiRadioactiveCircle.vue";

test("MdiRadioactiveCircle snapshot", () => {
  const wrapper = mount(MdiRadioactiveCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
