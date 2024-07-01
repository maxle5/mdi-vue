
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDockLeft from "../../src/components/MdiDockLeft.vue";

test("MdiDockLeft snapshot", () => {
  const wrapper = mount(MdiDockLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
