
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkipPreviousCircleOutline from "../../src/components/MdiSkipPreviousCircleOutline.vue";

test("MdiSkipPreviousCircleOutline snapshot", () => {
  const wrapper = mount(MdiSkipPreviousCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
