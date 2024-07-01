
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStepForward2 from "../../src/components/MdiStepForward2.vue";

test("MdiStepForward2 snapshot", () => {
  const wrapper = mount(MdiStepForward2, {});
  expect(wrapper.html()).toMatchSnapshot();
});
