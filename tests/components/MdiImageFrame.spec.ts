
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageFrame from "../../src/components/MdiImageFrame.vue";

test("MdiImageFrame snapshot", () => {
  const wrapper = mount(MdiImageFrame, {});
  expect(wrapper.html()).toMatchSnapshot();
});
