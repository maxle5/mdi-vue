
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEjectOutline from "../../src/components/MdiEjectOutline.vue";

test("MdiEjectOutline snapshot", () => {
  const wrapper = mount(MdiEjectOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
