
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStepBackward2 from "../../src/components/MdiStepBackward2.vue";

test("MdiStepBackward2 snapshot", () => {
  const wrapper = mount(MdiStepBackward2, {});
  expect(wrapper.html()).toMatchSnapshot();
});
