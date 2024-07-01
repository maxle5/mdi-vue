
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandBackLeftOff from "../../src/components/MdiHandBackLeftOff.vue";

test("MdiHandBackLeftOff snapshot", () => {
  const wrapper = mount(MdiHandBackLeftOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
