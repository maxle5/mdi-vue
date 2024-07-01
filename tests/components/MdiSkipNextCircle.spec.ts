
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkipNextCircle from "../../src/components/MdiSkipNextCircle.vue";

test("MdiSkipNextCircle snapshot", () => {
  const wrapper = mount(MdiSkipNextCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
