
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkipNextCircleOutline from "../../src/components/MdiSkipNextCircleOutline.vue";

test("MdiSkipNextCircleOutline snapshot", () => {
  const wrapper = mount(MdiSkipNextCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
