
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLighthouse from "../../src/components/MdiLighthouse.vue";

test("MdiLighthouse snapshot", () => {
  const wrapper = mount(MdiLighthouse, {});
  expect(wrapper.html()).toMatchSnapshot();
});
