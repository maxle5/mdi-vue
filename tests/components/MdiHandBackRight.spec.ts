
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandBackRight from "../../src/components/MdiHandBackRight.vue";

test("MdiHandBackRight snapshot", () => {
  const wrapper = mount(MdiHandBackRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
