
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeCircle from "../../src/components/MdiEyeCircle.vue";

test("MdiEyeCircle snapshot", () => {
  const wrapper = mount(MdiEyeCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
