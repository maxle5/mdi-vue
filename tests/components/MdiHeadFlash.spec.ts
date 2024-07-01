
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadFlash from "../../src/components/MdiHeadFlash.vue";

test("MdiHeadFlash snapshot", () => {
  const wrapper = mount(MdiHeadFlash, {});
  expect(wrapper.html()).toMatchSnapshot();
});
