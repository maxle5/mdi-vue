
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNeedleOff from "../../src/components/MdiNeedleOff.vue";

test("MdiNeedleOff snapshot", () => {
  const wrapper = mount(MdiNeedleOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
