
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPauseCircleOutline from "../../src/components/MdiPauseCircleOutline.vue";

test("MdiPauseCircleOutline snapshot", () => {
  const wrapper = mount(MdiPauseCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
