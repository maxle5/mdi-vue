
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDeleteSweepOutline from "../../src/components/MdiDeleteSweepOutline.vue";

test("MdiDeleteSweepOutline snapshot", () => {
  const wrapper = mount(MdiDeleteSweepOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
