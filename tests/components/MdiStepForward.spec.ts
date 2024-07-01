
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStepForward from "../../src/components/MdiStepForward.vue";

test("MdiStepForward snapshot", () => {
  const wrapper = mount(MdiStepForward, {});
  expect(wrapper.html()).toMatchSnapshot();
});
