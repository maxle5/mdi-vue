
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStepBackward from "../../src/components/MdiStepBackward.vue";

test("MdiStepBackward snapshot", () => {
  const wrapper = mount(MdiStepBackward, {});
  expect(wrapper.html()).toMatchSnapshot();
});
