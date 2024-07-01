
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkipPreviousCircle from "../../src/components/MdiSkipPreviousCircle.vue";

test("MdiSkipPreviousCircle snapshot", () => {
  const wrapper = mount(MdiSkipPreviousCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
