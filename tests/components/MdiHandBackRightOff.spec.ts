
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandBackRightOff from "../../src/components/MdiHandBackRightOff.vue";

test("MdiHandBackRightOff snapshot", () => {
  const wrapper = mount(MdiHandBackRightOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
