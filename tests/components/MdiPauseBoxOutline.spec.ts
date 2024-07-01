
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPauseBoxOutline from "../../src/components/MdiPauseBoxOutline.vue";

test("MdiPauseBoxOutline snapshot", () => {
  const wrapper = mount(MdiPauseBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
