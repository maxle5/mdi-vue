
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandBackLeftOffOutline from "../../src/components/MdiHandBackLeftOffOutline.vue";

test("MdiHandBackLeftOffOutline snapshot", () => {
  const wrapper = mount(MdiHandBackLeftOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
