
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiaperOutline from "../../src/components/MdiDiaperOutline.vue";

test("MdiDiaperOutline snapshot", () => {
  const wrapper = mount(MdiDiaperOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
