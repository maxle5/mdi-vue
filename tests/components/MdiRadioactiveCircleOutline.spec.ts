
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRadioactiveCircleOutline from "../../src/components/MdiRadioactiveCircleOutline.vue";

test("MdiRadioactiveCircleOutline snapshot", () => {
  const wrapper = mount(MdiRadioactiveCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
